const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({});

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL;
const TO_EMAIL = process.env.TO_EMAIL;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "").split(",");
const ALLOW_RECAPTCHA_BYPASS = process.env.ALLOW_RECAPTCHA_BYPASS === "true";

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}

function stripHtml(str) {
  return str.replace(/<[^>]*>/g, "").trim();
}

// Every value is entity-escaped before it goes into an HTML email; stripHtml
// alone leaves fragments such as "<img src=x onerror=..." without a closing ">".
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// The access form's practice types, as offered on the page.
const PRACTICE_TYPES = ["Insurance", "Estate Planning", "Appraisal", "Wealth & Banking", "Corporate Trustee", "Property Manager", "Other"];

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

async function verifyRecaptcha(token) {
  const params = new URLSearchParams({
    secret: RECAPTCHA_SECRET_KEY,
    response: token,
  });

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  return res.json();
}

exports.handler = async (event) => {
  const origin = event.headers?.origin || "";
  const headers = corsHeaders(origin);

  try {
    let body;
    try {
      body = JSON.parse(event.body || "{}");
    } catch {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid request" }) };
    }

    // Honeypot check
    if (body._phone) {
      console.log("Honeypot triggered, rejecting silently");
      return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
    }

    // Determine form type
    const formType = body.formType || "contact";
    const isDemo = formType === "demo";
    const isInvite = formType === "invite";
    // A practice asking for Partner Portal access: the demo form's fields, with an optional message.
    const isAccess = formType === "access";
    const isPractice = isDemo || isAccess;

    // Input validation
    const name = stripHtml(body.name || "");
    const email = (body.email || "").trim();
    const message = stripHtml(body.message || "");
    const recaptchaToken = body.recaptchaToken || "";

    if (!name || name.length > 100) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Name is required (max 100 characters)" }) };
    }
    if (!email || !isValidEmail(email)) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Valid email is required" }) };
    }
    if (isInvite || isAccess) {
      if (message.length > 2000) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: "Message is too long (max 2000 characters)" }) };
      }
    } else if (!message || message.length > 5000) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Message is required (max 5000 characters)" }) };
    }
    if (!recaptchaToken) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Security verification failed" }) };
    }

    // Demo form additional fields
    const company = isPractice ? stripHtml(body.company || "") : "";
    const role = isPractice ? stripHtml(body.role || "") : "";
    const clientCount = isPractice ? stripHtml(body.clientCount || "") : "";
    const inquiryType = !isPractice ? stripHtml(body.inquiryType || "General") : "";

    // Verify reCAPTCHA (bypass only allowed in staging via env var)
    let recaptchaResult = { success: true, score: 1.0, action: "staging-bypass" };
    if (!(ALLOW_RECAPTCHA_BYPASS && recaptchaToken === "staging-bypass")) {
      recaptchaResult = await verifyRecaptcha(recaptchaToken);
      console.log("reCAPTCHA result:", JSON.stringify({
        success: recaptchaResult.success,
        score: recaptchaResult.score,
        action: recaptchaResult.action,
      }));

      if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
        return { statusCode: 403, headers, body: JSON.stringify({ error: "Security verification failed" }) };
      }
    } else {
      console.log("reCAPTCHA bypassed (staging mode)");
    }

    // Escaped copies for the HTML bodies (the text bodies use the plain values)
    const h = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company),
      role: escapeHtml(role),
      clientCount: escapeHtml(clientCount),
      inquiryType: escapeHtml(inquiryType),
      message: escapeHtml(message).replace(/\n/g, "<br>"),
    };

    // Build email content
    let subject, htmlBody, textBody;

    if (isInvite) {
      subject = `HeirDock Invite Request: ${name}`;
      htmlBody = `
        <h2>New Invite Request</h2>
        <p><strong>Name:</strong> ${h.name}</p>
        <p><strong>Email:</strong> ${h.email}</p>
        ${message ? `<p><strong>Interest:</strong></p><p>${h.message}</p>` : "<p><em>No additional details provided.</em></p>"}
        <hr>
        <p style="color: #999; font-size: 12px;">
          reCAPTCHA score: ${recaptchaResult.score} | Sent from heirdock.com invite request form
        </p>
      `;
      textBody = `Invite Request\nName: ${name}\nEmail: ${email}\nInterest:\n${message || "(none)"}`;
    } else if (isAccess) {
      if (!company || company.length > 200 || !PRACTICE_TYPES.includes(role)) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: "Practice name and type are required" }) };
      }
      subject = `HeirDock Professional Access Request: ${name} (${company})`;
      htmlBody = `
        <h2>New Professional Access Request</h2>
        <p><strong>Name:</strong> ${h.name}</p>
        <p><strong>Email:</strong> ${h.email}</p>
        <p><strong>Practice:</strong> ${h.company}</p>
        <p><strong>Type of practice:</strong> ${h.role}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${h.message}</p>` : "<p><em>No message.</em></p>"}
        <hr>
        <p style="color: #999; font-size: 12px;">
          reCAPTCHA score: ${recaptchaResult.score} | Sent from heirdock.com professional access form
        </p>
      `;
      textBody = `Professional Access Request\nName: ${name}\nEmail: ${email}\nPractice: ${company}\nType: ${role}\nMessage:\n${message || "(none)"}`;
    } else if (isDemo) {
      subject = `HeirDock Demo Request: ${name} (${company || "N/A"})`;
      htmlBody = `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${h.name}</p>
        <p><strong>Email:</strong> ${h.email}</p>
        <p><strong>Company:</strong> ${h.company || "N/A"}</p>
        <p><strong>Role:</strong> ${h.role || "N/A"}</p>
        <p><strong>Client Count:</strong> ${h.clientCount || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${h.message}</p>
        <hr>
        <p style="color: #999; font-size: 12px;">
          reCAPTCHA score: ${recaptchaResult.score} | Sent from heirdock.com demo request form
        </p>
      `;
      textBody = `Demo Request\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nClients: ${clientCount}\nMessage:\n${message}`;
    } else {
      subject = `HeirDock Contact [${inquiryType}]: ${name}`;
      htmlBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${h.name}</p>
        <p><strong>Email:</strong> ${h.email}</p>
        <p><strong>Inquiry Type:</strong> ${h.inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${h.message}</p>
        <hr>
        <p style="color: #999; font-size: 12px;">
          reCAPTCHA score: ${recaptchaResult.score} | Sent from heirdock.com contact form
        </p>
      `;
      textBody = `Contact Form\nName: ${name}\nEmail: ${email}\nType: ${inquiryType}\nMessage:\n${message}`;
    }

    const command = new SendEmailCommand({
      Source: FROM_EMAIL,
      Destination: { ToAddresses: [TO_EMAIL] },
      ReplyToAddresses: [email],
      Message: {
        Subject: { Data: subject },
        Body: {
          Html: { Data: htmlBody },
          Text: { Data: textBody },
        },
      },
    });

    try {
      await ses.send(command);
      console.log("Email sent successfully", { formType, name, email, score: recaptchaResult.score });
    } catch (sesErr) {
      // Log the SES error but still return success to the user
      // The submission is logged in CloudWatch even if email delivery fails
      console.error("SES delivery failed (submission logged):", {
        formType, name, email, company, role, clientCount, inquiryType,
        message: message.substring(0, 200),
        sesError: sesErr.message || sesErr,
      });
    }

    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error("Contact form error:", err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: "Something went wrong. Please try again later." }) };
  }
};

const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const ses = new SESClient({});

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const FROM_EMAIL = process.env.FROM_EMAIL;
const TO_EMAIL = process.env.TO_EMAIL;
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "").split(",");

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
    if (!message || message.length > 5000) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Message is required (max 5000 characters)" }) };
    }
    if (!recaptchaToken) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: "Security verification failed" }) };
    }

    // Demo form additional fields
    const company = isDemo ? stripHtml(body.company || "") : "";
    const role = isDemo ? stripHtml(body.role || "") : "";
    const clientCount = isDemo ? stripHtml(body.clientCount || "") : "";
    const inquiryType = !isDemo ? stripHtml(body.inquiryType || "General") : "";

    // Verify reCAPTCHA (skip for staging bypass)
    let recaptchaResult = { success: true, score: 1.0, action: "staging-bypass" };
    if (recaptchaToken !== "staging-bypass") {
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

    // Build email content
    const subject = isDemo
      ? `HeirDock Demo Request: ${name} (${company || "N/A"})`
      : `HeirDock Contact [${inquiryType}]: ${name}`;

    const htmlBody = isDemo
      ? `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Role:</strong> ${role || "N/A"}</p>
        <p><strong>Client Count:</strong> ${clientCount || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #999; font-size: 12px;">
          reCAPTCHA score: ${recaptchaResult.score} | Sent from heirdock.com demo request form
        </p>
      `
      : `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p style="color: #999; font-size: 12px;">
          reCAPTCHA score: ${recaptchaResult.score} | Sent from heirdock.com contact form
        </p>
      `;

    const textBody = isDemo
      ? `Demo Request\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nClients: ${clientCount}\nMessage:\n${message}`
      : `Contact Form\nName: ${name}\nEmail: ${email}\nType: ${inquiryType}\nMessage:\n${message}`;

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

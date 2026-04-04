import { useState, useCallback } from "react";
import { getRecaptchaToken } from "./recaptcha";

const API_ENDPOINT = import.meta.env.VITE_CONTACT_API_ENDPOINT ?? "";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  errorMessage: string;
}

interface SubmitData {
  formType: "contact" | "demo";
  name: string;
  email: string;
  message: string;
  // Contact-specific
  inquiryType?: string;
  // Demo-specific
  company?: string;
  role?: string;
  clientCount?: string;
  // Honeypot
  _phone?: string;
}

export function useContactForm() {
  const [state, setState] = useState<FormState>({
    status: "idle",
    errorMessage: "",
  });

  const submit = useCallback(async (data: SubmitData) => {
    if (state.status === "submitting") return;

    setState({ status: "submitting", errorMessage: "" });

    try {
      // Client-side validation
      if (!data.name.trim() || data.name.length > 100) {
        setState({ status: "error", errorMessage: "Please enter your name (max 100 characters)." });
        return;
      }
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        setState({ status: "error", errorMessage: "Please enter a valid email address." });
        return;
      }
      if (!data.message.trim() || data.message.length > 5000) {
        setState({ status: "error", errorMessage: "Please enter a message (max 5000 characters)." });
        return;
      }

      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken("contact_submit");

      // Submit
      const response = await fetch(`${API_ENDPOINT}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }

      setState({ status: "success", errorMessage: "" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setState({ status: "error", errorMessage: message });
    }
  }, [state.status]);

  const reset = useCallback(() => {
    setState({ status: "idle", errorMessage: "" });
  }, []);

  return { ...state, submit, reset };
}

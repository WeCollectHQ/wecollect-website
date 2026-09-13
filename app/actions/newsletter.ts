"use server";

import { Resend } from "resend";

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    
    if (!email || !email.includes("@")) {
      return { error: "Please enter a valid email address.", success: false };
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    
    if (!apiKey || apiKey === "re_dummy_key_replace_me" || !audienceId || audienceId === "dummy_audience_id_replace_me") {
      // Simulate success for dummy env mode
      console.log("Simulated newsletter subscription for:", email);
      
      // Artificial delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, message: "Thanks for subscribing (Dummy Mode)!" };
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.contacts.create({
      email,
      audienceId,
    });

    if (error) {
      console.error("Resend error:", error);
      return { error: "Failed to subscribe. Please try again later.", success: false };
    }

    return { success: true, message: "Thanks for subscribing!" };
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return { error: "An unexpected error occurred.", success: false };
  }
}

"use server";

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string;
    
    if (!email || !email.includes("@")) {
      return { error: "Please enter a valid email address.", success: false };
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listId = process.env.BREVO_LIST_ID;
    
    // Check if we are in dummy mode or missing keys
    if (!apiKey || apiKey === "xkeysib-dummy-key" || !listId || listId === "1") {
      console.log("Simulated Brevo newsletter subscription for:", email);
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, message: "Thanks for subscribing (Dummy Mode)!" };
    }

    // Call Brevo API directly
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(listId, 10)], // Brevo expects an array of integer list IDs
        updateEnabled: true // If the contact exists, just add them to the list without throwing an error
      }),
    });

    if (!response.ok) {
      const data = await response.json();
      console.error("Brevo error:", data);
      
      // Handle already subscribed graceful failure just in case updateEnabled doesn't cover all cases
      if (data.code === "duplicate_parameter") {
        return { success: true, message: "You're already subscribed!" };
      }
      
      return { error: "Failed to subscribe. Please try again later.", success: false };
    }

    return { success: true, message: "Thanks for subscribing!" };
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return { error: "An unexpected error occurred.", success: false };
  }
}

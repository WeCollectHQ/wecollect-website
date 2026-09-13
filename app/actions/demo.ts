"use server";

import { WebClient } from "@slack/web-api";

export async function submitDemoForm(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const organization = formData.get("organization") as string;
    const email = formData.get("email") as string;
    const dataNeed = formData.get("dataNeed") as string;
    const fieldTeam = formData.get("fieldTeam") as string;

    if (!name || !email || !dataNeed) {
      return { error: "Please fill in all required fields.", success: false };
    }

    const token = process.env.SLACK_BOT_TOKEN;
    const channelId = process.env.SLACK_CHANNEL_ID;

    if (!token || token === "xoxb-dummy-token-replace-me" || !channelId || channelId === "C0DUMMYID") {
      // Dummy mode
      console.log("Simulated Demo Form Submission to Slack:", { name, organization, email, dataNeed, fieldTeam });
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, message: "Demo request sent successfully (Dummy Mode)!" };
    }

    const slackClient = new WebClient(token);
    
    await slackClient.chat.postMessage({
      channel: channelId,
      text: `📢 *New Demo Request*:
- *Name:* ${name}
- *Email:* ${email}
- *Organization:* ${organization || "N/A"}
- *Data Need:* ${dataNeed}
- *Field Team:* ${fieldTeam || "N/A"}`,
    });

    return { success: true, message: "Thanks! We will be in touch shortly." };
  } catch (err) {
    console.error("Demo submission error:", err);
    return { error: "Failed to send request. Please try again.", success: false };
  }
}

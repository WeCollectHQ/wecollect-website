import { WebClient } from "@slack/web-api";
import { NextApiRequest, NextApiResponse } from "next";

const slackClient = new WebClient(process.env.SLACK_BOT_TOKEN);
const channelId = process.env.SLACK_CHANNEL_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, orgName, dataNeeded, painPoint, dataType } =
    req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !dataNeeded ||
    !painPoint ||
    !dataType
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Log the environment variables to verify they are loaded
  console.log("SLACK_BOT_TOKEN:", process.env.SLACK_BOT_TOKEN);
  console.log("SLACK_CHANNEL_ID:", process.env.SLACK_CHANNEL_ID);

  // Log the message data to be sent to Slack
  console.log("Preparing to send message to Slack with the following data:");
  console.log({
    channel: channelId,
    text: `📢 *New Sales Form Submission*:
- *Name:* ${name}
- *Email:* ${email}
- *Phone:* ${phone}
- *Organization:* ${orgName}
- *Data Needed:* ${dataNeeded}
- *Data Type:* ${dataType}
- *Pain Point:* ${painPoint}`,
  });
  try {
    await slackClient.chat.postMessage({
      channel: channelId!,
      text: `📢 *New Sales Form Submission*:
- *Name:* ${name}
- *Email:* ${email}
- *Phone:* ${phone}
- *Organization:* ${orgName}
- *Data Needed:* ${dataNeeded}
- *Data Type:* ${dataType}
- *Description:* ${painPoint}`,
    });

    return res
      .status(200)
      .json({ message: "Notification sent to Slack successfully!" });
  } catch (error: any) {
    console.error("Error sending message to Slack:", error.data || error);
    return res.status(500).json({ message: "Failed to send message to Slack" });
  }
}

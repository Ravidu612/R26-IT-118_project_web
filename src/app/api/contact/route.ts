import { Resend } from "resend";
import { NextResponse } from "next/server";

// The email address that will RECEIVE messages from the contact form
const RECIPIENT_EMAIL = "ravidu612@gmail.com";

export async function POST(request: Request) {
  // Instantiate inside handler so it only runs at request time, not build time
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "TeaGuard Contact Form <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      replyTo: email,
      subject: `[TeaGuard Contact] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 12px;">
          <h2 style="color: #16a34a; margin-bottom: 4px;">New message via TeaGuard Website</h2>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin-bottom: 24px;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #16a34a;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Subject</td>
              <td style="padding: 8px 0;">${subject}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0;">Message</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
            This message was sent from the TeaGuard Research Website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

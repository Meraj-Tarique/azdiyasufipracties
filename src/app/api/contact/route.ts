import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactFormPayload = await request.json();
    const { name, email, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Website Contact <info@azdiasufipractices.com>',
      to: ['info@azdiasufipractices.com'],
      replyTo: email,
      subject: `New Contact Form: ${subject}`,
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <br>
          <p><em>This message was sent from your website contact form.</em></p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    await resend.emails.send({
      from: 'AzdiaSufiPractices <info@azdiasufipractices.com>',
      to: [email],
      subject: 'Thank you for contacting AzdiaSufiPractices',
      html: `
        <div>
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <br>
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <br>
          <p>Best regards,<br>The AzDiaSufiPractices Team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Something went wrong';

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export async function sendEmail(data: { to: string; subject: string; text: string; html: string }) {
  try {
    await sendgrid.send({
      to: data.to,
      subject: data.subject,
      text: data.text,
      html: data.html,
      from: `${process.env.EMAIL_FROM}`,
    });
  } catch (err: any) {
    console.error(err);
  }
}

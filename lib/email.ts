import sendgrid from "@sendgrid/mail";

export async function sendEmail(to: string, subject: string, text: string) {
  sendgrid.setApiKey(`${process.env.SENDGRID_API_KEY}`);
  await sendgrid.send({ to, subject, text, from: `${process.env.SENDGRID_FROM}` });
}

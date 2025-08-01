// utils/sendMail.js
import nodemailer from "nodemailer";

const sendMail = async ({ name, email, message }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_SENDER,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.MAIL_SENDER}>`,
    to: process.env.MAIL_RECEIVER,
    subject: "New Message from Portfolio Contact Form",
    replyTo: email, // ✅ auto sets reply button to recruiter
    html: `
      <h2>📬 New Contact Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  });
};

export default sendMail;

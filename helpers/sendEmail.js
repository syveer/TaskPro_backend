// import nodemailer from "nodemailer";
// import "dotenv/config";

// const { OUTLOOK_EMAIL, OUTLOOK_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: "smtp.office365.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: OUTLOOK_EMAIL,
//     pass: OUTLOOK_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// async function sendEmail(data) {
//   const email = { ...data, from: OUTLOOK_EMAIL };
//   try {
//     await transport.sendMail(email);
//     return true;
//   } catch (error) {
//     console.error("Error sending email:", error);
//     throw error;
//   }
// }

// export default sendEmail;

import mg from "./mailgunConfig.js";
import "dotenv/config";

async function sendEmail(data, userEmail) {
  const emailData = {
    from: userEmail,
    to: "taskproteam5@gmail.com",
    subject: "User need help",
    ...data,
  };

  try {
    const response = await mg.messages.create(
      process.env.MAILGUN_DOMAIN,
      emailData
    );
    console.log("Email sent:", response);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export default sendEmail;

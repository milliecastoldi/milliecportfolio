const { onValueCreated } = require("firebase-functions/v2/database");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "milliecastoldi23@gmail.com", 
    pass: "twmi zjdg zbvq soih", 
  },
});

exports.sendEmailOnMessage = onValueCreated("/messages/{pushId}", async (event) => {
  const data = event.data.val();

  const mailOptions = {
    from: "milliecastoldi23@gmail.com", 
    to: "milliecastoldi@icloud.com", 
    subject: `New message from ${data.firstName} ${data.surname}`,
    text: `
Email: ${data.email}
Subject: ${data.subject}
Message: ${data.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info("Email sent successfully!");
  } catch (error) {
    logger.error("Error sending email:", error);
  }
});

const functions = require("firebase-functions");
const config = functions.config();
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

let mailOptions = {
  from: "Arc Development <email@gmail.com>",
};

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    const {name, phone, email, message} = request.query;
    mailOptions = {
      ...mailOptions,
      to: email,
      subject: "Message Received",
      html: `
    <P style="font-size: 16px">From: ${name}</p>
    <P style="font-size: 16px">Email: ${email}</p>
    <P style="font-size: 16px">Phone Number: ${phone}</p>
    <P style="font-size: 16px">Message: ${message}</p>
    `,
    };
    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent successfully");
      }
    });
    mailOptions = {
      ...mailOptions,
      to: email,
      subject: "Message Received OK",
      html: `
    <P style="font-size: 16px">From: ${name}</p>
    <P style="font-size: 16px">Email: ${email}</p>
    <P style="font-size: 16px">Phone Number: ${phone}</p>
    <P style="font-size: 16px">Message: ${message}</p>
    `,
    };
    transporter.sendMail(mailOptions);
  });
});

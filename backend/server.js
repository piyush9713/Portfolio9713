require("dotenv").config(); // Load environment variables

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyParser.json());

app.post("/send", (req, res) => {
  const { name, email, message, subject, mobile } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New message from ${name}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>mobile: ${mobile}</p><p>Subject: ${subject}</p><p>Message: ${message}</p>`,
    text: `Name: ${name}\nEmail: ${email}\nmobile: ${mobile}\nSubject: ${subject}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error.message);
      res.status(500).send({ success: false, error: error.message });
    } else {
      console.log("Email sent:", info.response);
      res.send({ success: true });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Email setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "taranfitxoff@gmail.com",
        pass: "taranlifts225",
      },
    });

    const mailOptions = {
      from: email,
      to: "taranfitxoff@gmail.com",
      subject: `Contact Form Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: "Message sent successfully!" });
  } catch (error) {
    res.status(500).send({ error: "Failed to send message" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

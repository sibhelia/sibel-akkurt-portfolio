const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sibelakk23@gmail.com", // Senin e-posta adresin
    pass: "wwnjbcuzxmogzyxz" // Gmail ayarlarından özel şifre oluşturmalısın
  }
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "sibelakk23@gmail.com",
    subject: `Yeni Mesaj: ${name}`,
    text: `Mesaj: ${message}\n\nGönderen: ${name} - ${email}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send("E-posta başarıyla gönderildi!");
  });
});

app.listen(3001, () => console.log("📩 Sunucu çalışıyor!"));
import React, { useState } from "react";
import emailjs from "emailjs-com";
import './ContactForm.css';


function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Yükleme durumu
  const [error, setError] = useState(""); // Hata mesajı

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Gönderme işlemi başladığında butonu devre dışı bırak

    emailjs
      .sendForm(
        "service_btc0ffw",
        "template_y5u2ns8",
        e.target,
        "D0uAl4mCeGMsQZd2g"
      )
      .then(
        (result) => {
          console.log("Mesaj gönderildi:", result.text);
          alert("Mesaj başarıyla gönderildi!");
          setFormData({ name: "", email: "", message: "" }); // Formu sıfırla
        },
        (error) => {
          console.log("Hata:", error.text);
          setError("Mesaj gönderilirken hata oluştu. Lütfen tekrar deneyin.");
        }
      )
      .finally(() => {
        setLoading(false); // İşlem bittiğinde yüklemeyi kapat
      });
  };

  return (
    <div className="contact-form">
      <h2>Benimle İletişime Geçin</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Adınız"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-posta Adresiniz"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Mesajınızı buraya yazın..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? "Gönderiliyor..." : "Gönder"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
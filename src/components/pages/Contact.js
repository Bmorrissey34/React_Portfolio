import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xwl368n", "template_xxupd2m", e.target, "4uRoRRRpFUZhjMTd6")
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Your message has been sent successfully!");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send your message. Please try again.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.contactContainer}>
  <h2 className={styles.contactHeader}>Contact Me</h2>
  <form className={styles.contactForm} onSubmit={handleSubmit}>
    <div className={styles.formGroup}>
      <label className={styles.formLabel}>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={styles.formInput}
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label className={styles.formLabel}>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={styles.formInput}
        required
      />
    </div>
    <div className={styles.formGroup}>
      <label className={styles.formLabel}>Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className={styles.formTextarea}
        required
      />
    </div>
    <button type="submit" className={styles.formButton}>
      Send
    </button>
  </form>
</div>
  );
};

export default Contact;


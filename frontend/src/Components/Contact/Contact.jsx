import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      message: event.target.message.value,
      submittedAt: new Date().toISOString(), // optional timestamp
    };

    try {
      const response = await fetch("http://localhost:8080/api/forms/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const responseData = await response.json();
        setResult("❌ Failed to send message: " + JSON.stringify(responseData));
      } else {
        setResult("✅ Message Sent Successfully!");
        event.target.reset();
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setResult("⚠️ Network or Server error. Please try again later.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="message icon" />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="mail icon" /> caraEducations@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="phone icon" /> +91 73000 61000
          </li>
          <li>
            <img src={location_icon} alt="location icon" />
            Srinivasa Mangapuram Road, Tirupati
            <br />
            517505 Andhra Pradesh, India
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Type your message here"
            required
          ></textarea>

          <button type="submit" className="btn dark-btn">
            Send Message <img src={white_arrow} alt="arrow icon" />
          </button>
        </form>

        {result && <p className="result-message">{result}</p>}
      </div>
    </div>
  );
};

export default Contact;

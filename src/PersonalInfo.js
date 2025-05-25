import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from "./firebase";

const PersonalInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    await addDoc(collection(db, "messages"), {
      text: `Name: ${name}, Email: ${email}, Message: ${message}`,
      createdAt: serverTimestamp(),
      user: "Personal Info Form",
      room: "resume",
    });

    setSubmitted(true);
  };

  return (
    <div className="personal-info">
      <h3>PERSONAL PROFILE</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        <li>👤 <strong>Name:</strong> <span style={{ color: "#2E86C1" }}>GOPINATH S</span></li>
        <li>🎂 <strong>Date of Birth:</strong> <span style={{ color: "#28B463" }}>24.08.2003</span></li>
        <li>🗣️ <strong>Languages Known:</strong> <span style={{ color: "#AF7AC5" }}>English</span></li>
        <li>💻 <strong>Technical Skills:</strong>
          <div style={{ color: "#CA6F1E" }}>
            Core Java, JUnit, Selenium, TestNG, Cucumber, Gherkin,<br />
            JavaScript, React, Node.js, Express.js, Servlets, JDBC, Postman, Cypress
          </div>
        </li>
        <li>📁 <strong>Projects:</strong>
          <ul style={{ listStyle: "'📌 '", paddingLeft: 20 }}>
            <li>Online Shoe Mart</li>
            <li>Chat Application (Room-based)</li>
            <li>Mini Testing Project – Sample Demo Website</li>
            <li>HR Management Portal (Internship)</li>
          </ul>
        </li>
        <li>🎓 <strong>Certification:</strong>
          <span style={{ color: "#D68910" }}> NPTEL – Programming in Java</span>
        </li>
      </ul>

      <h3>CONTACT INFORMATION</h3>
      <p><strong>For more information, contact:</strong> 📞 <a href="tel:+91994863872">+91 999486 3872</a></p>

      <h3>GET IN TOUCH</h3>
      <div className="contact-form">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Message:</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="confirmation">
            <h2>Thank You!</h2>
            <p>Your message has been submitted successfully.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonalInfo;

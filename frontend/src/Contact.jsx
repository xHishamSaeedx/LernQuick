import React from "react";
import meImage from "./ayman.jpg";
import friendImage from "./hisham2.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <br />
      <div className="contact-cards">
        <div className="contact-card">
          <img src={meImage} alt="Me" />
          <div className="contact-info">
            <h3>Ayman Quadri</h3>
            <p>
              LinkedIn: <a href="your-linkedin-url">LinkedIn Profile</a>
            </p>
            <p>
              GitHub: <a href="your-github-url">GitHub Profile</a>
            </p>
          </div>
        </div>
        <div className="contact-card">
          <img src={friendImage} alt="Friend" />
          <div className="contact-info">
            <h3>Hisham Saeed</h3>
            <p>
              LinkedIn: <a href="friend-linkedin-url">LinkedIn Profile</a>
            </p>
            <p>
              GitHub: <a href="friend-github-url">GitHub Profile</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

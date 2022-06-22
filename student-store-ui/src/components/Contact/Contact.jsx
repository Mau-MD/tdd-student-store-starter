import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-text">
        <h2 className="contact-heading">Contact Us</h2>
        <div className="contact-label">
          <strong>Email:</strong>
          <p>maumd@fb.com</p>
        </div>
        <div className="contact-label">
          <strong>Phone:</strong>
          <p>1-800-CODEPATH</p>
        </div>
        <div className="contact-label">
          <strong>Address:</strong>
          <p>123 Fake Street, San Francisco, CA</p>
        </div>
        <div className="contact-icons">
          <div>Icon 1</div>
          <div>Icon 2</div>
          <div>Icon 3</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

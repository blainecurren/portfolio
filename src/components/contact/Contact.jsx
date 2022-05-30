// import { useState } from "react";
import React from "react";
import "./contact.scss";
import { SMTPClient } from "emailjs";

export default function Contact() {
  // const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setMessage(true);

    emailjs
      .sendForm("gmail", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>

      <div className="right"></div>

      {/* <div className="right">
      {/* place emailJS here */}
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div> */}
    </div>
  );
}

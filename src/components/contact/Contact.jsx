// import { useState } from "react";
import React, { useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
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
      <div className="right">
        <h2>Contact Me.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          {/* <textarea placeholder="Message"></textarea> */}
          <input type="email" name="user_email" />
          {/* <textarea placeholder>Message</textarea> */}
          <label>Message</label>
          <textarea name="message" />
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

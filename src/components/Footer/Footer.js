import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Footer.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nmyohr3",
        "template_qi8r8k8",
        form.current,
        "hzwfGGYCbC9o6vKAd"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Sent Email");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <form ref={form} onSubmit={sendEmail} className="contactme">
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            required
          />
        </div>

        <button type="submit" className="btn btn_contactme_submit">
          Submit
        </button>
      </form>

      <ToastContainer position="top-center" />
      <footer>{`Copyright © GeeMusic_Theory ${year}`}</footer>
    </div>
  );
};

export default Footer;

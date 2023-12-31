import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../Footer/Footer";
import Topnavbar from "../../Navbars/TopNavbar";
import "./Contactme.css";
const ContactForm = () => {
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

  return (
    <div className="contactmepage">
      <Topnavbar />
      <h1 className="title_contactme">Contact Me</h1>
      <div>
        <div className="contactmecenter">
          <div className="col-md-5">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
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

              <div className="mb-3">
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

              <div className="mb-3">
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
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />

      <Footer />
    </div>
  );
};

export default ContactForm;

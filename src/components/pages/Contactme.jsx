import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";
import Topnavbar from "../Navbars/TopNavbar";

const ContactForm = () => {
  const [isAlertVisible, setIsAlertVisible] = React.useState(false);
  const form = useRef();
  const [Successemail, setSuccessemail] = useState("");

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
          setSuccessemail("Great email sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  setTimeout(() => {
    setIsAlertVisible(false);
  }, 7000);

  const handleButtonClick = () => {
    setIsAlertVisible(true);
  };

  return (
    <div>
      <Topnavbar />
      <h1 className="subh" style={{ marginTop: "3%" }}>
        Contact Me
      </h1>
      <div style={{ marginTop: "0.5%" }}>
        <div className="subh">
          <div className="col-md-6">
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

              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleButtonClick}
              >
                Submit
              </button>
            </form>
            {isAlertVisible && (
              <div className="alert-container">
                <div className="alert-inner">{Successemail}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="subh">
        {" "}
        <img
          className="profileimg"
          src={require("../../content/profile_pic.jpg")}
        />
      </div>
      <div className="subh">
        {" "}
        <Footer />
      </div>
    </div>
  );
};

export default ContactForm;

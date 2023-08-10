import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuth } from "../../../context/AuthContext";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (email && password) {
        await createUser(email, password);
        navigate("/account");
      } else {
        toast.error("Please enter a email and password");
      }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="outerSignupDiv">
      <div>
        <h1>Sign up for an account</h1>
        <p>
          Already have an account yet?{" "}
          <Link to="/" className="underline">
            Sign in.
          </Link>
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button style={{ width: "420px" }} variant="primary" type="submit">
            Sign up
          </Button>
          <ToastContainer position="top-center" />
        </Form>
      </div>
    </div>
  );
};

export default Signup;

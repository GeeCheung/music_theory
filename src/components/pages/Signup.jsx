import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
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
      await createUser(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };

  return (
    <div className="outerSignupDiv">
      <div className="signupDiv">
        <h1 className="contentDiv">Sign up for an account</h1>
        <p>
          Already have an account yet?{" "}
          <Link style={{ color: "white" }} to="/" className="underline">
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
        </Form>
      </div>
    </div>
  );
};

export default Signup;

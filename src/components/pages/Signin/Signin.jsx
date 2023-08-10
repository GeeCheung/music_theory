import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuth } from "../../../context/AuthContext";
import "./Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, googleSignIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      toast.error("Incorrect email address and password!");
      setError(e.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/account");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      navigate("/forgotpassword");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="outerSigninDiv">
      <div>
        <h1>Sign Into account</h1>
        <p>
          Do not have an account yet? <Link to="/signup">Sign up.</Link>
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
          <p>
            <Link onClick={handleResetPassword}>Forgot your password?</Link>
          </p>
          <Button style={{ width: "400px" }} variant="primary" type="submit">
            Login
          </Button>
        </Form>
        OR
        <GoogleButton onClick={handleGoogleSignIn}></GoogleButton>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Signin;

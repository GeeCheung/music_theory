import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Signup.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, googleSignIn, facebookSignIn } = UserAuth();
  const { forgotPassword } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      alert("Incorrect email address and password!");
      setError(e.message);
      console.log(e.message);
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

  /*   const handleFacebookLogin = async (e) => {
    setError('')
    e.preventDefault();
    try {
      await facebookSignIn();
    } catch (error) {
      console.log(error.message);
    }
  }; */

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (email) {
        forgotPassword(email);
        alert("password email reset link sent");
      } else {
        alert("no email entered");
      }
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="outerSignupDiv">
      <div>
        <h1 className="contentDiv">Sign Into account</h1>
        <p>
          Do not have an account yet? <Link to="/signup">Sign up.</Link>
          <p>
            <Link onClick={handleResetPassword}>Forgot your password?</Link>
          </p>
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
          <Button style={{ width: "400px" }} variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <p className="contentDiv">OR</p>
        <div className="contentDiv">
          <GoogleButton
            className="googlesignin"
            onClick={handleGoogleSignIn}
          ></GoogleButton>
          {/* <Button onClick={handleFacebookLogin} style={{color: "white"}}  >Sign In with Facebook</Button>  */}
        </div>
      </div>
    </div>
  );
};

export default Signin;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const ForgotPassword = () => {
  const [resetemail, setResetEmail] = useState("");
  const [error, setError] = useState("");
  const { forgotPassword } = UserAuth();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (resetemail) {
        forgotPassword(resetemail);
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
    <div className="contentDiv">
      <Form onSubmit={handleResetPassword}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setResetEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Button style={{ width: "400px" }} variant="primary" type="submit">
          Send reset password link
        </Button>

        <p>
          <Link style={{ color: "white" }} to="/" className="underline">
            Ready to sign in?
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default ForgotPassword;

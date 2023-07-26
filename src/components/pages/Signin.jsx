import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../../context/AuthContext";
import './Signup.css';

const Signin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn, googleSignIn } = UserAuth();
  const { forgotPassword,  } = UserAuth();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      alert("Incorrect email address and password!")
      setError(e.message)
      console.log(e.message)
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
    setError('')
    try {
      if(email){forgotPassword(email);
      alert("password email reset link sent")
    } else{
      alert("no email entered")
    }
      
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };



  return (
  <div className='outerSignupDiv'>
    <div className='signupDiv'>
      
        <h1  className='contentDiv'>Sign Into account</h1>
        <p>
          Do not have an account yet?{' '}
          <Link to='/signup' className='underline'>
            Sign up.
          </Link>
          <p><Link onClick={handleResetPassword}>reset password</Link></p>
        </p>
      
      <Form  onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control  onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="Enter email" />
            We'll never share your email with anyone else.
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button style={{width: "500px"}} variant="primary" type="submit">
        Submit
        </Button>
      </Form>
      <br/>
      <GoogleButton className='googlesignin' onClick={ handleGoogleSignIn }></GoogleButton>
    </div>
  </div>
  )
}

export default Signin

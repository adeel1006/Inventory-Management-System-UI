import React, { useState } from "react";
import "./login.css";
import logo from '../../assets/images/logo.png';
import { useNavigate } from "react-router-dom";

export default function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const loginHandler = () => {
   navigate('/dashboard')
  }

  return (
    <div className="login-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="container-login">
        <h4>Welcome Back!</h4>
        <p>Enter your credentials to access your account</p>
        <form className="login-form">
          <label>Email</label>
          <input type="text" placeholder="Enter Email Address" onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="text" placeholder="Enter Password" onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="login-btn" onClick={loginHandler}>Sign In</button>
        </form>
      </div>
      <p>Forgot your Password? <a href="#">Reset Password</a></p>
    </div>
  );
}

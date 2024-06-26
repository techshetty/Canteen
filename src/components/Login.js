import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Login.css';

const Login = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const navigate = useNavigate(); 

  const toggleForm = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/'); 
  };

  const handleSignup = (e) => {
    e.preventDefault(); 
    navigate('/'); 
  };

  return (
    <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSignup}>
          <h2>Create Account</h2>
          <span></span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot Your Password?</a>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h2>Already have an account?</h2>
            <p>Sign in to your account</p>
            <button className="hidden" onClick={toggleForm}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h2>Don't have an account?</h2>
            <p>Register to use all of the site's features</p>
            <button className="hidden" onClick={toggleForm}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

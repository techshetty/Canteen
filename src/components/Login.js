import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/Login.css';

const Login = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const navigate = useNavigate();

  // State for sign-up form
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');

  // State for sign-in form
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signInError, setSignInError] = useState('');

  const toggleForm = () => {
    setIsSignUpActive(!isSignUpActive);
    // Reset form fields and errors when toggling
    setSignUpName('');
    setSignUpEmail('');
    setSignUpPassword('');
    setSignUpError('');
    setSignInEmail('');
    setSignInPassword('');
    setSignInError('');
  };

  const validateSignUp = () => {
    if (!signUpName.trim()) return "Name is required";
    if (!signUpEmail.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(signUpEmail)) return "Email is invalid";
    if (!signUpPassword) return "Password is required";
    if (signUpPassword.length < 6) return "Password must be at least 6 characters";
    return "";
  };

  const validateSignIn = () => {
    if (!signInEmail.trim()) return "Email is required";
    if (!signInPassword) return "Password is required";
    return "";
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const error = validateSignUp();
    if (!error) {
      // Proceed with sign up
      console.log('Sign up successful');
      navigate('/');
    } else {
      setSignUpError(error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const error = validateSignIn();
    if (!error) {
      // Proceed with sign in
      console.log('Sign in successful');
      navigate('/');
    } else {
      setSignInError(error);
    }
  };

  return (
    <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSignup}>
          <h2>Create Account</h2>
          <input 
            type="text" 
            placeholder="Name" 
            value={signUpName}
            onChange={(e) => setSignUpName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          {signUpError && <div className="error-message">{signUpError}</div>}
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLogin}>
          <h1>Sign In</h1>
          <input 
            type="email" 
            placeholder="Email" 
            value={signInEmail}
            onChange={(e) => setSignInEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          {signInError && <div className="error-message">{signInError}</div>}
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
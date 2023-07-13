import { useState } from 'react';
import ReactCodeInput from 'react-code-input';

import './loginpopup.css';

const LoginPopup = () => {
  const [isActive, setIsActive] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [withOtp, setWithOtp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleIsActive = () => {
    setIsActive(!isActive);
  };
  const handleforgetPassword = () => {
    setForgotPassword(!forgotPassword);
  };

  const handleWithOtp = () => {
    setWithOtp(!withOtp);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    //login logic goes here
    // this is sample login logic
    // replace this logic according to your need
    if (email === 'admin' && password === 'password') {
      // Successful login
      console.log('Login successful');
    } else {
      // Failed login
      console.log('Login failed');
    }

    // Reset the input fields
    setEmail('');
    setPassword('');
  };

  const handleSignup = (event) => {
    event.preventDefault();
    //signup loic goes here
    // this is sample signup logic
    // replace this logic according to your need
    if (email && password) {
      // Successful signup
      console.log('Signup successful');
    } else {
      // Failed signup
      console.log('Signup failed');
    }

    // Reset the input fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="loginpopup">
      <div className="loginpopup__header">
        <h1>Welcome Back</h1>
        <p>Log into your account</p>
      </div>
      <div className="loginpopup__content">
        {forgotPassword && <ForgetPassward />}
        {withOtp && <OtpLogin />}
        <Login
          isActive={isActive}
          email={email}
          forgotPassword={forgotPassword}
          handleEmailChange={handleEmailChange}
          password={password}
          handlePasswordChange={handlePasswordChange}
          withOtp={withOtp}
        />
        <button className="loginpopup__form-btn" onClick={handleforgetPassword}>
          {isActive || withOtp
            ? ' '
            : `${forgotPassword ? 'Go back ▶' : ' Forget passward'}`}
        </button>
        <span>or</span>
        <button className="loginpopup__form-otp" onClick={handleWithOtp}>
          {withOtp
            ? `${isActive ? 'Sign up with Email' : 'Sign in with Email'}`
            : `${isActive ? 'Sign up with OTP' : 'Sign in with OTP'}`}
        </button>
        <button className="loginpopup__form-googlebtn">
          {isActive ? 'Sign up with Google' : 'Sign in with Google'}
        </button>
      </div>
      <button className="loginpopup__button">
        {isActive ? 'Sign up' : 'Sign in'}
      </button>
      <div className="loginpopup__footer">
        {isActive ? (
          <p>
            have an account? <button onClick={handleIsActive}>Sign in</button>.
          </p>
        ) : (
          <p>
            Don't have an account?{' '}
            <button onClick={handleIsActive}>Create account</button>.
          </p>
        )}
      </div>
    </div>
  );
};
export default LoginPopup;

function Login({
  isActive,
  email,
  forgotPassword,
  handleEmailChange,
  password,
  handlePasswordChange,
  withOtp,
}) {
  return (
    <form className={forgotPassword || withOtp ? 'hidden' : 'loginpopup__form'}>
      {isActive ? (
        <>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Full Name"
            required
          />
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Confirm Password"
            required
          />
        </>
      ) : (
        <>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
            required
          />
        </>
      )}
    </form>
  );
}
function ForgetPassward({ password, handlePasswordChange }) {
  return (
    <form className="loginpopup__form">
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="New Password"
        required
      />
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Confirm Password"
        required
      />
    </form>
  );
}

function OtpLogin() {
  const [isActive, setIsActive] = useState(false);
  const [otp, setOtp] = useState('');

  const handleChange = (value) => {
    setOtp(value);
  };

  function handleIsActive() {
    setIsActive(!isActive);
  }

  return (
    <form className="loginpopup__form">
      <div>
        {isActive ? (
          <ReactCodeInput
            value={otp}
            onChange={handleChange}
            type="text"
            fields={6} // The number of OTP digits
            inputStyle={{ width: '2rem', height: '2rem', margin: '0.5rem' }} // Optional: Style for OTP input fields
          />
        ) : (
          <>
            <input
              type="tel"
              id="phone"
              pattern="\+91[0-9]{10}"
              placeholder="+91-800096150"
              required
            ></input>
          </>
        )}
        <button
          type="button"
          className="loginpopup__otp-btn"
          onClick={isActive ? handleChange : handleIsActive}
        >
          {isActive ? 'Sign in' : 'Send OTP'}
        </button>
      </div>
    </form>
  );
}

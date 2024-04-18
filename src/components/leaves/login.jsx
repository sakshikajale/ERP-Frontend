import React, { useState } from 'react';

const Login = ({ onRegister, onForgotPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    // Send login request to the server
    fetch('http://localhost:8080/Attendance/Employee/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    .then(response => {
      if (response.ok) {
        // Successful login
        alert('Login successful!');
      } else {
        // Failed login
        setErrorMessage('Invalid username or password');
      }
    })
    .catch(error => {
      console.error('Login failed:', error);
      setErrorMessage('Failed to log in. Please try again later.');
    });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="forgot-password" onClick={onForgotPassword}>
          Forgot Password?
        </div>
        <div className="register-link" onClick={onRegister}>
          Register here.
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    // Validation checks - for simplicity, you can add more complex validation as needed
    if (!name || !phoneNumber || !email || !password || !designation || !department || !currentAddress || !permanentAddress || !dateOfJoining) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Send data to the server using Fetch API
    fetch('http://localhost:8080/Registration/emp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phoneNumber,
        email,
        password,
        designation,
        department,
        currentAddress,
        permanentAddress,
        doj: dateOfJoining // Assuming 'doj' is the equivalent of 'dateOfJoining' in Java
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to register.');
        }
        // Registration successful
        alert('Registration successful!');
        // Clear form fields and error message
        setName('');
        setPhoneNumber('');
        setEmail('');
        setPassword('');
        setDesignation('');
        setDepartment('');
        setCurrentAddress('');
        setPermanentAddress('');
        setDateOfJoining('');
        setErrorMessage('');
      })
      .catch(error => {
        console.error('Registration failed:', error);
        setErrorMessage('Failed to register. Please try again later.');
      });
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Registration</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <input
          type="text"
          placeholder="Current Address"
          value={currentAddress}
          onChange={(e) => setCurrentAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Permanent Address"
          value={permanentAddress}
          onChange={(e) => setPermanentAddress(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date of Joining"
          value={dateOfJoining}
          onChange={(e) => setDateOfJoining(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Register;

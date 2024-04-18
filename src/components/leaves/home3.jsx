// AttendanceTable.js
import React, { useState } from 'react';
import Webcam from 'react-webcam';

function Home3() {
  const [employeeName, setEmployeeName] = useState('');
  const [selfie, setSelfie] = useState('');
  const [punchInTime, setPunchInTime] = useState('');
  const [punchOutTime, setPunchOutTime] = useState('');
  const [totalHours, setTotalHours] = useState('');
  const [lateMessage, setLateMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const webcamRef = React.useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSelfie(imageSrc);
  };

  const handlePunchIn = () => {
    const currentTime = new Date().toLocaleTimeString();
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();

    if (currentHour < 10 || (currentHour === 10 && currentMinute <= 30)) {
      setPunchInTime(currentTime);
      setSuccessMessage('Punch in successful!');
      setLateMessage('');
    } else {
      setLateMessage('Late marks applied. Punch in after 10:30 AM.');
    }
  };

  const handlePunchOut = () => {
    const currentTime = new Date().toLocaleTimeString();
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();

    if (currentHour >= 18 && currentMinute >= 30) {
      setPunchOutTime(currentTime);
      calculateTotalHours();
      setSuccessMessage('Punch out successful!');
      setLateMessage('');
    } else {
      alert('You can only punch out after 6:30 PM.');
    }
  };

  const calculateTotalHours = () => {
    const punchIn = new Date('01/01/2022 ' + punchInTime);
    const punchOut = new Date('01/01/2022 ' + punchOutTime);
    const difference = Math.abs(punchOut - punchIn);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    setTotalHours(`${hours} hours ${minutes} minutes`);
  };

  return (
    <div className="attendance-table">
      <h2>Attendance Table</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Selfie</th>
            <th>Punch In Time</th>
            <th>Punch Out Time</th>
            <th>Total Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employeeName}</td>
            <td><img src={selfie} alt="Selfie" /></td>
            <td>{punchInTime}</td>
            <td>{punchOutTime}</td>
            <td>{totalHours}</td>
          </tr>
        </tbody>
      </table>
      <div className="form">
        <div className="input-row">
          <input
            type="text"
            placeholder="Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <div className="punch-buttons">
            <button onClick={handlePunchIn}>Punch In</button>
            <button onClick={handlePunchOut}>Punch Out</button>
          </div>
        </div>
        <div className="webcam">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <button onClick={capture}>Capture</button>
        </div>z
        {lateMessage && <p className="warning-message">{lateMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );8
}

export default Home3;

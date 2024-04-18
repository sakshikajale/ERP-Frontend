import React, { useState } from 'react';

const Notification2 = () => {
  const [pushNotification, setPushNotification] = useState(false);
  const [emailNotification, setEmailNotification] = useState(false);
  const [quietMode, setQuietMode] = useState(false);
  const [temporaryPause, setTemporaryPause] = useState(false);

  const handlePushNotificationToggle = () => {
    setPushNotification(!pushNotification);
  };

  const handleEmailNotificationToggle = () => {
    setEmailNotification(!emailNotification);
  };

  const handleQuietModeToggle = () => {
    setQuietMode(!quietMode);
  };

  const handleTemporaryPauseToggle = () => {
    setTemporaryPause(!temporaryPause);
  };

  return (
    <div className="settings-page">
      <div className="top-section">
        <div className="profile-info">
          <div className="profile-photo"></div>
          <div className="emp-info">
            <div className="emp-name">John Doe</div>
            <div className="emp-description">Software Engineer</div>
          </div>
        </div>
      </div>
      <div className="buttons-section">
        <button>Personal Info</button>
        <button>Change Password</button>
        <button>Notification</button>
        <button>Terms & Condition</button>
      </div>
    <div className="notification-screen">
      <h2>Notification Settings</h2>
      <div className="notification-option">
        <span>Push Notification
        <p>Temporaily pause</p>
        </span>
        
        <label className="switch">
          <input type="checkbox" checked={pushNotification} onChange={handlePushNotificationToggle} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="notification-option">
        <span>Pause Notification
        <p>Temporaily pause Notification
          
        </p>

        </span>
        <label className="switch">
          <input type="checkbox" checked={emailNotification} onChange={handleEmailNotificationToggle} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="notification-option">
        <span>Quiet Mode
        <p>Automatically mute notification at night</p>

        </span>
        <label className="switch">
          <input type="checkbox" checked={quietMode} onChange={handleQuietModeToggle} />
          <span className="slider"></span>
        </label>
      </div>
      <div className="notification-option">
        <span>Email Notification
        <p>new Emails</p>

        </span>
        <label className="switch">
          <input type="checkbox" checked={temporaryPause} onChange={handleTemporaryPauseToggle} />
          <span className="slider"></span>
        </label>
      </div>
      </div>
    </div>
  );
};

export default Notification2;

// import React, { useState } from 'react';

// const Setting = () => {
//   const [formData, setFormData] = useState({
//     currentPassword: '',
//     newPassword:'',
//     reTypeNewPassword:'',


   
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSave = () => {
//     // Perform form validation here
//     // If validation passes, save data
//     console.log('Form data:', formData);
//   };

//   return (
//     <div className="settings-page">
//       <div className="top-section">
//         <div className="profile-info">
//           <div className="profile-photo"></div>
//           <div className="emp-info">
//             <div className="emp-name">John Doe</div>
//             <div className="emp-description">Software Engineer</div>
//           </div>
//         </div>
//       </div>
//       <div className="buttons-section">
//         <button>Personal Info</button>
//         <button>Change Password</button>
//         <button>Notification</button>
//         <button>Terms & Condition</button>
//       </div>
//       <div className="form-section">
//         <div className="personal-info">
//           <h2>Change Password</h2>
//           <div className="form-group">
//             <label htmlFor="Current Password">Current Password:</label>
//             <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="">New Password</label>
//             <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="empId">reEnterPassword</label>
//             <input type="text" id="empId" name="empId" value={formData.empId} onChange={handleChange} />
//           </div>
          
          
        
//       </div>
//         </div>
        
//       <div className="save-button">
//         <button onClick={handleSave}>Change Password</button>
//       </div>
//     </div>
  
//   );
// };

// export default Setting;

// import React, { useState } from 'react';

// const Setting = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     dob: '',
//     empId: '',
//     empDesignation: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: ''
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
//           <h2>Personal Details</h2>
//           <div className="form-group">
//             <label htmlFor="firstName">First Name:</label>
//             <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name:</label>
//             <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="dob">Date of Birth:</label>
//             <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="empId">Employee ID:</label>
//             <input type="text" id="empId" name="empId" value={formData.empId} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="empDesignation">Employee Designation:</label>
//             <input type="text" id="empDesignation" name="empDesignation" value={formData.empDesignation} onChange={handleChange} />
//           </div>
//           <div className="contact-info">
//           <h2>Contact Details</h2>
//           <div className="form-group">
//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone:</label>
//             <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="country">Country:</label>
//             <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} />
//           </div>
//           <div className="form-group">
//             <label htmlFor="city">City:</label>
//             <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
//           </div>
//         </div>
//       </div>
//         </div>
        
//       <div className="save-button">
//         <button onClick={handleSave}>Save</button>
//       </div>
//     </div>
  
//   );
// };

// export default Setting;

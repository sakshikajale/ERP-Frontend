// import React, { useState } from 'react';

// const Team = () => {
//   // Sample data for team members
//   const [teamMembers] = useState([
//     { id: 1, name: 'Jonathan hasaly', designation: ' (Team Leader)', status: 'Online', ongoingProjects: ['Project A', 'Project B']},
    
//   ]);

//   return (
//     <div className="team-container">
//       {teamMembers.map(member => (
//         <div className="team-member" key={member.id}>
//           <div className="profile-photo">
//             <img src={`member${member.id}-avatar.jpg`}  />
//           </div>
//           <div className="member-details">
//             <h2>{member.name}</h2>
//             <p>{member.designation}</p>
//             <p>Status: {member.status}</p>
//             <div className="ongoing-projects">
//               {member.ongoingProjects.map((project, index) => (
//                 <span key={index}>{project}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Team;

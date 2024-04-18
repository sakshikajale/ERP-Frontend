import React, { useState } from 'react';

const Holiday= () => {
  // Sample data for holidays
  const [holidays] = useState([
    { id: 1, date: '2024-04-15', name: 'Easter Sunday' },
    { id: 2, date: '2024-05-27', name: 'Memorial Day' },
    { id: 3, date: '2024-07-04', name: 'Independence Day' },
    
    // Add more holidays as needed
  ]);

  return (
    <div className="holiday-screen">
      {holidays.map(holiday => (
        <div className="holiday-container" key={holiday.id}>
          <div className="date-container">
            <span className="month">{new Date(holiday.date).toLocaleString('default', { month: 'short' })}</span>
            <span className="day">{new Date(holiday.date).getDate()}</span>
          </div>
          <div className="holiday-details">
            <p>{holiday.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Holiday;

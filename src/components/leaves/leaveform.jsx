import React from 'react'

function Leaveform(){
    
      return (
        <div className="container">
          <h2>Leave Application Form</h2>
          <form>
            <div className="form-group">
              {/* <label htmlFor="empName">Employee Name:</label> */}
              <input type="text" id="empName" name="empName" placeholder='employee Name' />
            </div>
            <div className="form-group">
              <label htmlFor="leaveType">Leave Type:</label>
              <select id="leaveType" name="leaveType" placeholder='LeaveType'>
                <option value="sick">Sick</option>
                <option value="casual">Casual</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="startDate">Start Date:</label>
              <input type="date" id="startDate" name="startDate" placeholder='StartDate' />
            </div>
            <div className="form-group">
              <label htmlFor="endDate">End Date:</label>
              <input type="date" id="endDate" name="endDate" placeholder='EndDate'/>
            </div>
            <div className="form-group">
              <label htmlFor="reason">Reason:</label>
              <textarea id="reason" name="reason" rows="4" placeholder='z'></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      );
    }

export default Leaveform

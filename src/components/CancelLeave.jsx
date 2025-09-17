import React from "react";
import "../styles/CancelLeave.css";
import Header from "./Header";
import EmployeeProfile from "./EmployeeProfile";
import RequiredInfo from "./CancelLeaveHeader";
import applyIcon from "../assets/svg/applyicon.svg";
import viewPoliceIcon from "../assets/svg/viewpolice.svg";

const CancelLeave = () => {
  // Event handlers for all clickable components
  const handleBackClick = () => {
    console.log("Back button clicked");
    // Add your navigation logic here
  };

  const handleClockClick = () => {
    console.log("Clock icon clicked");
    // Add your clock/time logic here
  };

  const handleAvatarClick = () => {
    console.log("Avatar clicked");
    // Add your avatar click logic here
  };

  const handleNameClick = () => {
    console.log("Name clicked");
    // Add your name click logic here
  };

  const handleEmailClick = () => {
    console.log("Email clicked");
    // Add your email click logic here
  };

  const handleRequiredInfoClick = () => {
    console.log("Required Information clicked");
    // Add your required info click logic here
  };

  const handleDesignationClick = () => {
    console.log("Designation clicked");
    // Add your designation click logic here
  };

  const handleDivisionClick = () => {
    console.log("Division clicked");
    // Add your division click logic here
  };

  const handleLocationClick = () => {
    console.log("Location clicked");
    // Add your location click logic here
  };

  const handleManagerClick = () => {
    console.log("Manager clicked");
    // Add your manager click logic here
  };

  // Employee data object
  const employeeData = {
    initials: "MK",
    name: "Manoj Kandan M",
    genId: "255048778",
    email: "Manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division:
      "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    location: "Bangalore",
    manager: "Ravindra S R (06786669)",
    isOnline: true,
  };

  return (
    <div className="cancel-leave-container">
      <Header
        breadcrumb="My Workspace >  Leave Request"
        title={
          <span>
            Leave Request or Cancel{" "}
            <span className="employee-submit-text">- Employee Submit</span>
          </span>
        }
        onBackClick={handleBackClick}
        onClockClick={handleClockClick}
      />

      <EmployeeProfile
        employee={employeeData}
        onAvatarClick={handleAvatarClick}
        onNameClick={handleNameClick}
        onEmailClick={handleEmailClick}
        onDesignationClick={handleDesignationClick}
        onDivisionClick={handleDivisionClick}
        onLocationClick={handleLocationClick}
        onManagerClick={handleManagerClick}
      />

      <RequiredInfo onClick={handleRequiredInfoClick} />

      <div className="cancel-leave-section">
        <div className="cancel-leave-content">
          <div className="apply-cancel-section">
            <div className="section-header">
              <img src={applyIcon} alt="Apply" className="apply-icon" />
              <span className="section-title">Apply/Cancel Leave</span>
            </div>

            <div className="request-type-section">
              <label className="request-type-label">Request Type</label>
              <div className="request-type-options">
                <label className="radio-option">
                  <input type="radio" name="requestType" value="apply" />
                  <span className="radio-text">Apply Leave</span>
                </label>
                <label className="radio-option selected">
                  <input
                    type="radio"
                    name="requestType"
                    value="cancel"
                    defaultChecked
                  />
                  <span className="radio-text">Cancel Leave</span>
                </label>
              </div>
            </div>

            <div className="leave-list-section">
              <h3 className="leave-list-title">Leave List</h3>
              <div className="leave-table-container">
                <table className="leave-table">
                  <thead>
                    <tr>
                      <th>
                        <input type="checkbox" />
                      </th>
                      <th>Leave Type</th>
                      <th>Leave From</th>
                      <th>Leave To</th>
                      <th>No of Days</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>CL</td>
                      <td>02-May-2025</td>
                      <td>07-May-2025</td>
                      <td>4</td>
                      <td>Change of Plans</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>SL</td>
                      <td>08-May-2025</td>
                      <td>14-May-2025</td>
                      <td>5</td>
                      <td>Cancel due to Important Meeting...</td>
                    </tr>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>PL</td>
                      <td>15-May-2025</td>
                      <td>15-May-2025</td>
                      <td>1</td>
                      <td>Cancel due to Important Meeting...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="comment-section">
              <label className="comment-label">Comment</label>
              <textarea
                className="comment-textarea"
                placeholder="I have an important personal matter to attend at my Home town."
                defaultValue="I have an important personal matter to attend at my Home town."
              />
            </div>

            <div className="action-buttons">
              <button className="cancel-button">Cancel</button>
              <button className="submit-button">Submit</button>
            </div>

            <div className="view-policies-section">
              <img
                src={viewPoliceIcon}
                alt="View Policies"
                className="view-policies-icon"
              />
              <span className="view-policies-text">View Policies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelLeave;

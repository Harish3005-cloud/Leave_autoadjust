import React, { useState } from "react";
import DatePicker from "react-datepicker"; // Import the date picker
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
import "../styles/Leave_Balance.css";
import Header from "./Header";
import EmployeeProfile from "./EmployeeProfile";
import RequiredInfo from "./CancelLeaveHeader";
import TransferWorkflow from "./TransferWorkflow";
import applyIcon from "../assets/svg/applyicon.svg";
import noteIcon from "../assets/svg/Note.svg";
import dateIcon from "../assets/svg/date_icon.svg";
import plusIcon from "../assets/svg/plus-icon .svg";
import deleteIcon from "../assets/svg/delete-icon.svg";
import viewPoliceIcon from "../assets/svg/viewpolice.svg";


const Leave_Balance = () => {
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

  const handleRejectClick = () => {
    console.log("Reject button clicked");
    // Add your reject logic here
  };

  const handleApprovalClick = () => {
    console.log("Approval button clicked");
    // Add your approval logic here
  };

  const handleTransferWFClick = () => {
    console.log("Transfer WF clicked");
    // Add your transfer workflow logic here
  };

  const handleViewPoliciesClick = () => {
    console.log("View Policies clicked");
    // Add your view policies logic here
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

  const [requestType, setRequestType] = useState("apply");
  const [dayType, setDayType] = useState("full");
  const [leaveType, setLeaveType] = useState("Auto Suggest");
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const toggleNote = () => setIsNoteOpen((p) => !p);

  const handleAddToLeaveList = () => {
    console.log("Add to Leave list clicked", {
      requestType,
      dayType,
      leaveType,
      
      fromDate,
      toDate,
    });
  };

  return (
    <div className="apply-leave-container">
      <Header
        breadcrumb="My Workspace >  Leave Approval Request"
        title={
          <span>
            Leave Request or Cancel{" "}
            <span className="employee-submit-text">- Manager Approval</span>
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

      <div className="apply-leave-section">
        <div className="apply-leave-content">
          <div className="apply-approval-section">
            <div className="section-header">
              <div className="section-header-left">
                <img src={applyIcon} alt="Apply" className="apply-icon" />
                <span className="section-title">Apply/Approval Leave</span>
              </div>
              <button className="note-fab note-in-header" onClick={toggleNote} type="button" aria-label="Toggle note">
                <img src={noteIcon} alt="Note" className="note-icon" />
              </button>
            </div>
            
            
                {isNoteOpen && (
                  <div className="note-panel" role="dialog" aria-label="Note">
                    <button
                      type="button"
                      className="note-close"
                      aria-label="Close note"
                      onClick={() => setIsNoteOpen(false)}
                    >
                      ×
                    </button>
                    <div className="note-panel-header">Note:</div>
                    <ul className="note-list">
                      <li>
                        When user selects a Suggest <strong>Auto leave type</strong>, the system
                        generates and suggests auto leave types so the user can use those leaves,
                        and they can edit or delete the leave type.
                      </li>
                    </ul>
                  </div>
                )}

            <div className="apply-cancel-container">
              <div className="row request-and-day">
                <div className="request-type-section">
                  <label className="request-type-label">Request Type</label>
                  <div className="request-type-options">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="requestType"
                        value="apply"
                        checked={requestType === "apply"}
                        onChange={() => setRequestType("apply")}
                      />
                      <span className="radio-text">Apply Leave</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="requestType"
                        value="cancel"
                        checked={requestType === "cancel"}
                        onChange={() => setRequestType("cancel")}
                      />
                      <span className="radio-text">Cancel Leave</span>
                    </label>
                  </div>
                </div>

                <div className="day-type-section">
                  <label className="request-type-label">Day Type</label>
                  <div className="request-type-options">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="dayType"
                        value="full"
                        checked={dayType === "full"}
                        onChange={() => setDayType("full")}
                      />
                      <span className="radio-text">Full day</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="dayType"
                        value="first"
                        checked={dayType === "first"}
                        onChange={() => setDayType("first")}
                      />
                      <span className="radio-text">First Half</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="dayType"
                        value="second"
                        checked={dayType === "second"}
                        onChange={() => setDayType("second")}
                      />
                      <span className="radio-text">Second Half</span>
                    </label>
                  </div>
                </div>

             
              </div>

              <div className="row controls-row">
                <div className="control">
                  <label className="control-label">Leave Type</label>
                  <select
                    className="control-select"
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                  >
                    <option>Auto Suggest</option>
                    <option>CL</option>
                    <option>SL</option>
                    <option>PL</option>
                  </select>
                </div>

                <div className="control">
                  <label className="control-label">From Date</label>
                  <div className="date-input">
                    <DatePicker
                      selected={fromDate}
                      onChange={(date) => setFromDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="dd/mm/yyyy"
                      className="date-native" // Use existing class for styling
                    />
                    <div className="date-button">
                      <img src={dateIcon} alt="calendar" className="date-icon" />
                    </div>
                  </div>
                </div>

                <div className="control">
                  <label className="control-label">To Date</label>
                  <div className="date-input">
                    <DatePicker
                      selected={toDate}
                      onChange={(date) => setToDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="dd/mm/yyyy"
                      className="date-native" // Use existing class for styling
                      minDate={fromDate} // Prevent selecting a to-date before the from-date
                    />
                    <div className="date-button">
                      <img src={dateIcon} alt="calendar" className="date-icon" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row controls-row-2">
                <div className="control add-to-list">
                  <button type="button" className="add-to-leave" onClick={handleAddToLeaveList}>
                    <img src={plusIcon} alt="add" className="add-to-leave-icon" />
                    <p className="add-to-leave-text"> Add to Leave list</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="leave-list-section">
              <h3 className="leave-list-title">Leave List</h3>
              <div className="leave-table-container">
                <table className="leave-table">
                  <thead>
                    <tr>
                      <th>Leave Type</th>
                      <th>Applied Date</th>
                      <th>Leave From</th>
                      <th>Leave To</th>
                      <th>No of Days</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>CL</td>
                      <td>30-June-2025</td>
                      <td>02-May-2025</td>
                      <td>07-May-2025</td>
                      <td>4</td>
                      <td><img className="delete-icon" src={deleteIcon} alt="delete" /></td>
                    </tr>
                    <tr>
                      <td>SL</td>
                      <td>30-June-2025</td>
                      <td>08-May-2025</td>
                      <td>14-May-2025</td>
                      <td>5</td>
                      <td><img className="delete-icon" src={deleteIcon} alt="delete" /></td>
                    </tr>
                    <tr>
                      <td>PL</td>
                      <td>30-June-2025</td>
                      <td>15-May-2025</td>
                      <td>15-May-2025</td>
                      <td>1</td>
                      <td><img className="delete-icon" src={deleteIcon} alt="delete" /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="reason-section">
              <label className="reason-label">Reason (Max 100 Chars)</label>
              <textarea
                className="reason-textarea"
                placeholder="I have an important personal matter to attend at my Home town."
                defaultValue="I have an important personal matter to attend at my Home town."
                maxLength="100"
              />
            </div>

            <div className="comment-section">
              <label className="comment-label">Comment (Max 500 Chars)</label>
              <textarea
                className="comment-textarea"
                placeholder="I have an important personal matter to attend at my Home town."
                defaultValue="I have an important personal matter to attend at my Home town."
                maxLength="500"
              />
            </div>

            <div className="action-buttons">
              <button className="cancel-blue-button" onClick={handleRejectClick}>Cancel</button>
              <button className="approval-button" onClick={handleApprovalClick}>Submit</button>
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

export default Leave_Balance;

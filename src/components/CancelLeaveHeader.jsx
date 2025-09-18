import React, { useState, useEffect, useRef } from "react";
import "../styles/RequiredInfo.css";
import CancelLeaveIcon from "../assets/svg/cancelLeaveIcon.svg";
import greyIcon from "../assets/svg/greyiicon.svg";
import arrowCircle from "../assets/svg/Arrow-circle.svg";
import notification from "../assets/svg/notification.svg";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/styles/overlayscrollbars.css";

const LeaveDetailModal = ({ onClose }) => {
  const leaveDetails = [
    { type: 'CL', balance: 12, allotted: 12, utilised: 0, inProcess: 2, from: '01-Apr-2025', to: '01-Apr-2025' },
    { type: 'SL', balance: 57, allotted: 12, utilised: 0, inProcess: 0, from: '01-Apr-2025', to: '01-Apr-2025' },
    { type: 'Long Service', balance: 0, allotted: 0, utilised: 0, inProcess: 0, from: '01-Apr-2025', to: '01-Apr-2025' },
    { type: 'Additional WFH', balance: 11, allotted: 12, utilised: 1, inProcess: 0, from: '01-Apr-2025', to: '01-Apr-2025' },
    { type: 'Maternity Leave', balance: 182, allotted: 182, utilised: 0, inProcess: 0, from: '01-Apr-2025', to: '01-Apr-2025' },
    { type: 'Marriage Leave', balance: 5, allotted: 5, utilised: 0, inProcess: 0, from: '01-Apr-2025', to: '01-Apr-2025' },
  ];
  const popoverRef = useRef(null);

  // Hook to handle clicks outside the popover
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        onClose();
      }
    };
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    // Removed the overlay div, using a new class for the popover content
    <div ref={popoverRef} className="leave-detail-popover">
      <div className="leave-detail-modal-header">
        <h2>Leave Type</h2>
        <button onClick={onClose} className="leave-detail-modal-close" aria-label="Close modal">&times;</button>
      </div>
      <OverlayScrollbarsComponent
        options={{
          paddingAbsolute: true,
          scrollbars: {
            theme: "os-theme-leave",
            visibility: "visible",
            autoHide: "never",
          },
        }}
        className="leave-detail-table-container"
      >
        <table className="leave-detail-table">
          <thead>
            <tr>
              <th>Leave Type</th>
              <th>Balance</th>
              <th>Allotted</th>
              <th>Utilised</th>
              <th>In Process</th>
              <th>Effective From</th>
              <th>Effective To</th>
            </tr>
          </thead>
          <tbody>
            {leaveDetails.map((leave, index) => (
              <tr key={index}>
                <td>{leave.type}</td>
                <td>{leave.balance}</td>
                <td>{leave.allotted}</td>
                <td>{leave.utilised}</td>
                <td>{leave.inProcess}</td>
                <td>{leave.from}</td>
                <td>{leave.to}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </OverlayScrollbarsComponent>
    </div>
  );
};


const RequiredInfo = ({ onClick, className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const leaveSummaries = [
    { title: "Casual Leave (CL)", days: 5, bg: "#EAF3FF" },
    { title: "Service Leave (SL)", days: 5, bg: "#F8F2FA" },
    { title: "Privilege Leave (PL)", days: 0, bg: "#EBFAF2" },
    { title: "Additional WFH", days: 12, bg: "#FFFAE9" },
    { title: "Long Service Leave", days: 5, bg: "#F8F2FA" },
    { title: "Service Leave (PL)", days: 12, bg: "#EAF3FF" },
    { title: "Maternity Leave", days: 182, bg: "#EBFAF2" },
  ];
  return (
    <>
    {isModalOpen && <LeaveDetailModal onClose={() => setIsModalOpen(false)} />}
    <div className={`required-info ${className}`} onClick={onClick}>
      <div className="cancel-leave-left">
        <img
          src={CancelLeaveIcon}
          className="clipboard-icon"
          width="24"
          height="26"
          alt="Cancel Leave Icon"
        />
        <span className="required-text"> Leave Balance Overview</span>
        <img
          src={greyIcon}
          alt="Info"
          className={`grey-icon-header ${isModalOpen ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
        />
      </div>

      <div className="financial-year-header">
        <span className="financial-year-label">Financial year</span>
        <div className="year-options">
          <label className="radio-option">
            <input type="radio" name="year" value="2025" defaultChecked />
            <span className="radio-text">2025</span>
          </label>
          <label className="radio-option">
            <input type="radio" name="year" value="2024" />
            <span className="radio-text">2024</span>
          </label>
        </div>
      </div>
    </div>
    <div className="leave-summary-row">
      {leaveSummaries.map((item, idx) => (
       
        <div key={item.title} className="leave-card" style={{ background: item.bg }}>
           {idx < 3 && <img src={notification} alt="notification" className="notification-icon-header" />}
          <div className="leave-card-title">{item.title}</div>
          <div className="leave-card-days">{item.days} days</div>
          {idx === leaveSummaries.length - 1 && (
            <button className="leave-cards-next" type="button" aria-label="Next">
              <img src={arrowCircle} alt="next" />
            </button>
          )}
        </div>
      ))}
    </div>
    </>
  );
};

export default RequiredInfo;

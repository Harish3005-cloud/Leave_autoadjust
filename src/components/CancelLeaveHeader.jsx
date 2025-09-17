import React from "react";
import "../styles/RequiredInfo.css";
import CancelLeaveIcon from "../assets/svg/cancelLeaveIcon.svg";
import greyIcon from "../assets/svg/greyiicon.svg";
import arrowCircle from "../assets/svg/Arrow-circle.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
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
        <img src={greyIcon} alt="Grey Icon" className="grey-icon-header" />
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

import React from "react";
import "../styles/RequiredInfo.css";
import CancelLeaveIcon from "../assets/svg/cancelLeaveIcon.svg";
import greyIcon from "../assets/svg/greyiicon.svg";

const RequiredInfo = ({ onClick, className = "" }) => {
  return (
    <div className={`required-info ${className}`} onClick={onClick}>
      <div className="cancel-leave-left">
        <img
          src={CancelLeaveIcon}
          className="clipboard-icon"
          width="24"
          height="26"
          alt="Cancel Leave Icon"
        />
        <span className="required-text">Leave Approval</span>
        <img src={greyIcon} alt="Grey Icon" className="grey-icon-header" />
      </div>
    </div>
  );
};

export default RequiredInfo;

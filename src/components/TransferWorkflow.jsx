import React, { useState } from "react";
import "../styles/TransferWorkflow.css";
import transferworkflowIcon from "../assets/svg/transferworflow.svg";
import markdownarrowIcon from "../assets/svg/markdownarrow.svg";
import transferWFIcon from "../assets/svg/transferWF.svg";
import viewPoliceIcon from "../assets/svg/viewpolice.svg";

const TransferWorkflow = ({
  defaultTransferTo = "Krishna@samsung.com",
  defaultComment = "I have an important personal matter to attend at my Home town.",
  onTransferWFClick,
  onViewPoliciesClick,
}) => {
  const [selectedRequestType, setSelectedRequestType] = useState("transferTo");

  const handleRequestTypeChange = (value) => {
    setSelectedRequestType(value);
  };
  const handleTransferWFClick = () => {
    console.log("Transfer WF button clicked");
    if (onTransferWFClick) {
      onTransferWFClick();
    }
  };

  const handleViewPoliciesClick = () => {
    console.log("View Policies clicked");
    if (onViewPoliciesClick) {
      onViewPoliciesClick();
    }
  };

  return (
    <div className="transfer-workflow-section">
      <div className="transfer-workflow-header">
        <img
          src={transferworkflowIcon}
          alt="Transfer Workflow"
          className="transfer-workflow-icon"
        />
        <span className="transfer-workflow-title">Transfer Workflow</span>
        <img
          src={markdownarrowIcon}
          alt="Dropdown Arrow"
          className="dropdown-arrow-icon"
        />
      </div>

      <div className="transfer-workflow-content">
        <div className="request-type-section">
          <label className="request-type-label">Request Type</label>
          <div className="request-type-options">
            <label
              className={`radio-option ${
                selectedRequestType === "transferTo" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="transferRequestType"
                value="transferTo"
                checked={selectedRequestType === "transferTo"}
                onChange={() => handleRequestTypeChange("transferTo")}
              />
              <span className="radio-text">Transfer To</span>
            </label>
            <label
              className={`radio-option ${
                selectedRequestType === "reviewAndSend" ? "selected" : ""
              }`}
            >
              <input
                type="radio"
                name="transferRequestType"
                value="reviewAndSend"
                checked={selectedRequestType === "reviewAndSend"}
                onChange={() => handleRequestTypeChange("reviewAndSend")}
              />
              <span className="radio-text">
                Review and send back to Me (No Data Modification)
              </span>
            </label>
          </div>
        </div>

        <div className="transfer-to-section">
          <label className="transfer-to-label">Transfer To</label>
          <input
            type="text"
            className="transfer-to-input"
            placeholder={defaultTransferTo}
            defaultValue={defaultTransferTo}
          />
        </div>

        <div className="transfer-comment-section">
          <label className="transfer-comment-label">
            Comment (Max 500 Chars)
          </label>
          <textarea
            className="transfer-comment-textarea"
            placeholder={defaultComment}
            defaultValue={defaultComment}
            maxLength="500"
          />
        </div>

        <div className="transfer-workflow-button">
          <button
            className="transfer-wf-button"
            onClick={handleTransferWFClick}
          >
            <img
              src={transferWFIcon}
              alt="Transfer WF"
              className="transfer-wf-icon"
            />
            Transfer WF
          </button>
        </div>

        <div
          className="view-policies-section"
          onClick={handleViewPoliciesClick}
        >
          <img
            src={viewPoliceIcon}
            alt="View Policies"
            className="view-policies-icon"
          />
          <span className="view-policies-text">View Policies</span>
        </div>
      </div>
    </div>
  );
};

export default TransferWorkflow;

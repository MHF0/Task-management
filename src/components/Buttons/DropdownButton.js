import React, { useState } from "react";

const DropdownButton = ({ status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(status?.name);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusClick = (statusName) => {
    setSelectedStatus(statusName);
    setIsOpen(false); // Close dropdown on selection
  };

  const getStatusClass = (statusName) => {
    return selectedStatus === statusName ? "selected" : "";
  };

  return (
    <div className="dropdown-button">
      <button
        onClick={toggleDropdown}
        style={{
          backgroundColor: status?.colors?.background,
          color: status?.colors?.color,
        }}
      >
        {status?.name}
        <span className="dropdown-arrow" style={{ color: status.colors.color }}>
          &#9662;
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu task-status-list">
          <li
            className={`task-status-item completed ${getStatusClass(
              "Completed"
            )}`}
            onClick={() => handleStatusClick("Completed")}
          >
            <span className="status-indicator"></span>
            Completed
          </li>
          <li
            className={`task-status-item incomplete ${getStatusClass(
              "Incomplete"
            )}`}
            onClick={() => handleStatusClick("Incomplete")}
          >
            <span className="status-indicator"></span>
            Incomplete
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownButton;

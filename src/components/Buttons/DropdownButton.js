import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTaskStatus } from "../../redux/tasksSlice";

const DropdownButton = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(task?.status?.name);

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusClick = (statusName) => {
    let newStatus = {
      name: statusName,
      colors: {
        background: "",
        color: "",
      },
    };

    // Apply styles based on the selected status
    if (statusName === "Completed") {
      newStatus.colors.background = "#E1FFDE";
      newStatus.colors.color = "#0A7900";
    } else if (statusName === "Incomplete") {
      newStatus.colors.background = "#FFF2DE";
      newStatus.colors.color = "#FF6B00";
    }

    // Dispatch the update to the Redux store
    dispatch(updateTaskStatus({ id: task.id, status: newStatus }));

    // Update local state
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
          backgroundColor: task?.status?.colors?.background,
          color: task?.status?.colors?.color,
        }}
      >
        {task?.status?.name}
        <span
          className="dropdown-arrow"
          style={{ color: task?.status.colors.color }}
        >
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

import React from "react";
import "./buttons.css";
const NewTask = ({ handleOpenModal }) => {
  return (
    <div>
      <button className="new-task-button" onClick={handleOpenModal}>
        <span className="plus-icon">+</span>{" "}
        <span className="text-hover">New Task</span>
      </button>
    </div>
  );
};

export default NewTask;

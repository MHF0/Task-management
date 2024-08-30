import React from "react";
import "./buttons.css";
const NewTask = () => {
  return (
    <div>
      <button className="new-task-button">
        <span className="plus-icon">+</span>{" "}
        <span className="text-hover">New Task</span>
      </button>
    </div>
  );
};

export default NewTask;

import React, { useState } from "react";
import "./style.css";
import EditDelete from "../Buttons/EditDelete";
import DropdownButton from "../Buttons/DropdownButton";
const Task = () => {
  const [data, setData] = useState([
    {
      title: "Task as example 01",
      id: "1",
      status: {
        name: "Completed",
        colors: { background: "#E1FFDE", color: "#0A7900" },
      },
      categories: ["Category 01", "Category 02", "Category 03"],
    },
  ]);
  return (
    <div>
      {data?.map((task, index) => (
        <div className="task-card" key={index}>
          <div className="task-content">
            <div className="task-title">{task.title}</div>
            <div className="task-categories">
              {task.categories.map((category) => (
                <span key={category} className="task-category">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="task-status-actions">
            <DropdownButton status={task.status} />
            <EditDelete />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;

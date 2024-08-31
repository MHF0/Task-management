import React from "react";
import "./style.css";
import EditDelete from "../Buttons/EditDelete";
import DropdownButton from "../Buttons/DropdownButton";
import Tooltip from "../Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";

const Task = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.filteredTasks);

  const handleDelete = (task) => {
    console.log("Clicked", task);

    dispatch(deleteTask(task));
  };
  return (
    <div>
      {tasks?.map((task, index) => (
        <div className="task-card" key={index}>
          <div className="task-content">
            <div className="task-title">
              <Tooltip
                children={task?.title}
                tooltipContent={task?.descriptions}
              />
            </div>
            <div className="task-categories">
              {task?.categories.map((category) => (
                <span key={category} className="task-category">
                  {category}
                </span>
              ))}
            </div>
          </div>
          <div className="task-status-actions">
            <DropdownButton task={task} />
            <EditDelete deleteButton={() => handleDelete(task)} task={task} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;

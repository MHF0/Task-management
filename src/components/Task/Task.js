import React, { useState } from "react";
import "./style.css";
import EditDelete from "../Buttons/EditDelete";
import DropdownButton from "../Buttons/DropdownButton";
import Tooltip from "../Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTaskStatus, deleteTask } from "../../redux/tasksSlice";

const Task = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [data, setData] = useState([
    {
      title: "Task as example 01",
      id: "1",
      status: {
        name: "Completed",
        colors: { background: "#E1FFDE", color: "#0A7900" },
      },
      categories: ["Category 01", "Category 02", "Category 03"],
      descriptions:
        "Lorem ipsum dolor sit amet consectetur. Eu odio diam consequat enim felis. Sollicitudin posuere nunc sagittis egestas purus viverra id hendrerit varius. Tristique in nullam lacus facilisis ornare elementum et. ",
    },
  ]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
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
            <DropdownButton status={task?.status} />
            <EditDelete deleteButton={handleDelete} task={task} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Task;

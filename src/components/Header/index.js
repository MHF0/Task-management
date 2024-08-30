import React, { useState } from "react";
import "./style.css";
import NewTask from "../Buttons/NewTask";
const Header = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <header className="header">
      <div className="task-management-container">
        <div className="task-management-text">Task Management</div>
        <NewTask />
      </div>
    </header>
  );
};

export default Header;

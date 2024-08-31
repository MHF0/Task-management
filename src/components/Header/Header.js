import React, { useState } from "react";
import "./style.css";
import NewTask from "../Buttons/NewTask";
import TaskModal from "../TaskModal";
const Header = () => {
  const [openModal, setModal] = useState(false);
  return (
    <header className="header">
      <div className="task-management-container">
        <div className="task-management-text">Task Management</div>
        <NewTask handleOpenModal={() => setModal(true)} />
      </div>
      {openModal && (
        <TaskModal isOpen={openModal} onClose={() => setModal(false)} />
      )}
    </header>
  );
};

export default Header;

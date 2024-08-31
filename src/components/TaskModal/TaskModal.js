import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/tasksSlice";
import "./style.css";

const TaskModal = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [categories, setCategories] = useState([]);

  const dispatch = useDispatch();

  const handleCategoryInput = (e) => {
    setCategoryInput(e.target.value);
  };

  const handleCategoryKeyPress = (e) => {
    if (e.key === "Enter" && categoryInput.trim() !== "") {
      e.preventDefault();
      setCategories([...categories, categoryInput.trim()]);
      setCategoryInput(""); // Clear input after adding the category
    }
  };

  const removeCategory = (categoryToRemove) => {
    setCategories(
      categories.filter((category) => category !== categoryToRemove)
    );
  };

  const handleCreateTask = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Task Name is required");
      return;
    }

    const newTask = {
      title,
      id: new Date().toISOString(),
      status: {
        name: "Incomplete",
        colors: { background: "#FFDEE1", color: "#790000" },
      },
      categories,
      descriptions,
    };

    // Dispatch the addTask action
    dispatch(addTask(newTask));

    // Reset form fields
    setTitle("");
    setDescriptions("");
    setCategories([]);

    // Close the modal
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Create New Task</h2>
        <form onSubmit={handleCreateTask}>
          <div className="form-group required-group">
            <input
              type="text"
              className="form-input"
              placeholder="Task Name *"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              placeholder="Task description (optional)"
              className="form-input"
              value={descriptions}
              onChange={(e) => setDescriptions(e.target.value)}
            ></textarea>
          </div>

          <div className="form-group">
            <div className="categories-wrapper">
              <div className="categories-input-container">
                {categories.map((category, index) => (
                  <div className="category-tag" key={index}>
                    {category}
                    <button
                      type="button"
                      className="category-remove"
                      onClick={() => removeCategory(category)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <input
                  placeholder="Categories (press enter when finish)"
                  type="text"
                  className="form-input categories-input"
                  value={categoryInput}
                  onChange={handleCategoryInput}
                  onKeyDown={handleCategoryKeyPress}
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-create">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;

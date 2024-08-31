import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/tasksSlice";
import "./style.css";

const TaskModal = ({ onClose, task }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [descriptions, setDescriptions] = useState(task?.descriptions || "");
  const [categoryInput, setCategoryInput] = useState("");
  const [categories, setCategories] = useState(task?.categories || []);

  const dispatch = useDispatch();

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescriptions(task.descriptions);
      setCategories(task.categories || []);
    }
  }, [task]);

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Task Name is required");
      return;
    }

    const taskData = {
      title,
      id: task?.id || new Date().toISOString(),
      status: task?.status || {
        name: "Incomplete",
        colors: { background: "#FFF2DE", color: "#FF6B00" },
      },
      categories,
      descriptions,
    };

    if (task) {
      // Dispatch the updateTask action if editing an existing task
      dispatch(updateTask(taskData));
    } else {
      // Dispatch the addTask action if creating a new task
      dispatch(addTask(taskData));
    }

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
        <h2 className="modal-title">
          {task ? "Edit Task" : "Create New Task"}
        </h2>
        <form onSubmit={handleSubmit}>
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
              {task ? "Save Changes" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;

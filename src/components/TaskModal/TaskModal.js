import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/tasksSlice";
import "./style.css";

const TaskModal = ({ onClose, task }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [descriptions, setDescriptions] = useState(task?.descriptions || "");
  const [categoryInput, setCategoryInput] = useState("");
  const [categories, setCategories] = useState(task?.categories || []);
  const [categoryInputError, setCategoryInputError] = useState("");

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
    setCategoryInputError(""); // Reset error message when user types
  };

  const handleCategoryKeyPress = (e) => {
    if (e.key === "Enter" && categoryInput.trim() !== "") {
      e.preventDefault();
      setCategories([...categories, categoryInput.trim()]);
      setCategoryInput(""); // Clear input after adding the category
      setCategoryInputError(""); // Reset error message
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

    if (categoryInput.trim() !== "") {
      setCategoryInputError(
        "You must press Enter to add the category before submitting."
      );
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
      dispatch(updateTask(taskData));
    } else {
      dispatch(addTask(taskData));
    }

    setTitle("");
    setDescriptions("");
    setCategories([]);
    setCategoryInputError(""); // Reset error message
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">
          {task ? "Edit Task" : "Create New Task"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="relative">
              <input
                type="text"
                className="form-input peer"
                placeholder=" "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label className="form-label absolute text-gray-400 transform -translate-y-1/2 top-2 left-2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-600">
                Task Name <span className="required">*</span>
              </label>
            </div>
          </div>

          <div className="form-group">
            <div className="relative">
              <textarea
                className="form-input peer"
                placeholder=" "
                value={descriptions}
                onChange={(e) => setDescriptions(e.target.value)}
              ></textarea>
              <label className="form-label absolute text-gray-400 transform -translate-y-1/2 top-2 left-2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:text-blue-600">
                Task Description (optional)
              </label>
            </div>
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
                  placeholder=" "
                  type="text"
                  className={`form-input categories-input peer ${
                    categoryInputError ? "error" : ""
                  }`}
                  value={categoryInput}
                  onChange={handleCategoryInput}
                  onKeyDown={handleCategoryKeyPress}
                />
                <label
                  className={`${
                    categories?.length > 0
                      ? "category-form-input-focus"
                      : "form-label"
                  }`}
                >
                  Categories
                </label>
                {categoryInputError && (
                  <p className="error-message">{categoryInputError}</p>
                )}
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

import React, { useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../redux/tasksSlice";

const Filter = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const dispatch = useDispatch();

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    dispatch(filterByCategory({ category }));
  };

  const categories = useSelector((state) => state.tasks.categories);

  return (
    <div className="filter-dropdown">
      <h2>Filter</h2>
      <div className="filter-section">
        <h3>Completion Status</h3>
        <ul className="filter-options">
          <li
            className={selectedStatus === "All" ? "active" : ""}
            onClick={() => handleStatusChange("All")}
          >
            <input
              type="radio"
              name="status"
              value="All"
              checked={selectedStatus === "All"}
            />
            All
          </li>
          <li
            className={selectedStatus === "Completed" ? "active" : ""}
            onClick={() => handleStatusChange("Completed")}
          >
            <input
              type="radio"
              name="status"
              value="Completed"
              checked={selectedStatus === "Completed"}
            />
            Completed
          </li>
          <li
            className={selectedStatus === "Incomplete" ? "active" : ""}
            onClick={() => handleStatusChange("Incomplete")}
          >
            <input
              type="radio"
              name="status"
              value="Incomplete"
              checked={selectedStatus === "Incomplete"}
            />
            Incomplete
          </li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>Categories</h3>
        <ul className="filter-options">
          <li
            className={selectedCategory === "All" ? "active" : ""}
            onClick={() => handleCategoryChange("All")}
          >
            <input
              type="radio"
              name="category"
              value="All"
              checked={selectedCategory === "All"}
            />
            All
          </li>
          {categories?.map((category, index) => (
            <li
              key={index}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => handleCategoryChange(category)}
            >
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
              />
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;

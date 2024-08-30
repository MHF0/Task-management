import React, { useState } from "react";
import "./style.css";

const Filter = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

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
          <li
            className={selectedCategory === "Category 01" ? "active" : ""}
            onClick={() => handleCategoryChange("Category 01")}
          >
            <input
              type="radio"
              name="category"
              value="Category 01"
              checked={selectedCategory === "Category 01"}
            />
            Category 01
          </li>
          <li
            className={selectedCategory === "Category 02" ? "active" : ""}
            onClick={() => handleCategoryChange("Category 02")}
          >
            <input
              type="radio"
              name="category"
              value="Category 02"
              checked={selectedCategory === "Category 02"}
            />
            Category 02
          </li>
          <li
            className={selectedCategory === "Category 03" ? "active" : ""}
            onClick={() => handleCategoryChange("Category 03")}
          >
            <input
              type="radio"
              name="category"
              value="Category 03"
              checked={selectedCategory === "Category 03"}
            />
            Category 03
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;

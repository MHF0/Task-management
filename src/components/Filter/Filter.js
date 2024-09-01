import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { filterByCategory } from "../../redux/tasksSlice";

const Filter = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.tasks.categories);

  useEffect(() => {
    dispatch(
      filterByCategory({ category: selectedCategory, status: selectedStatus })
    );
  }, [selectedCategory, selectedStatus, dispatch]);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    dispatch(filterByCategory({ category: selectedCategory, status }));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    dispatch(filterByCategory({ category, status: selectedStatus }));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {/* Burger Menu Button */}
      <button className="burger-menu" onClick={toggleModal}>
        &#9776; {/* Burger icon */}
      </button>

      {/* Always Visible on Desktop */}
      <div className="filter-dropdown desktop">
        <h2>Filter</h2>
        <div className="filter-section">
          <h3>Completion Status</h3>
          <ul className="filter-options">
            {["All", "Completed", "Incomplete"].map((status) => (
              <li
                key={status}
                className={selectedStatus === status ? "active" : ""}
                onClick={() => handleStatusChange(status)}
              >
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={selectedStatus === status}
                  onChange={() => handleStatusChange(status)}
                />
                {status}
              </li>
            ))}
          </ul>
        </div>
        <div className="filter-section">
          <h3>Categories</h3>
          <ul className="filter-options">
            {["All", ...categories].map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryChange(category)}
              >
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={() => handleCategoryChange(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal for Mobile */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content-filter" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
            <div className="filter-dropdown">
              <h2>Filter</h2>
              <div className="filter-section">
                <h3>Completion Status</h3>
                <ul className="filter-options">
                  {["All", "Completed", "Incomplete"].map((status) => (
                    <li
                      key={status}
                      className={selectedStatus === status ? "active" : ""}
                      onClick={() => {
                        setIsModalOpen(false);
                        handleStatusChange(status);
                      }}
                    >
                      <input
                        type="radio"
                        name="status"
                        value={status}
                        checked={selectedStatus === status}
                        onChange={() => handleStatusChange(status)}
                      />
                      {status}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="filter-section">
                <h3>Categories</h3>
                <ul className="filter-options">
                  {["All", ...categories].map((category) => (
                    <li
                      key={category}
                      className={selectedCategory === category ? "active" : ""}
                      onClick={() => {
                        setIsModalOpen(false);
                        handleCategoryChange(category);
                      }}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={() => handleCategoryChange(category)}
                      />
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;

import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../../redux/tasksSlice";

const Filter = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      filterByCategory({ category: selectedCategory, status: selectedStatus })
    );
  }, [selectedCategory, selectedStatus, dispatch]);

  const categories = useSelector((state) => state.tasks.categories);

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
            <li
              className={selectedStatus === "All" ? "active" : ""}
              onClick={() => setSelectedStatus("All")}
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
              onClick={() => setSelectedStatus("Completed")}
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
              onClick={() => setSelectedStatus("Incomplete")}
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
              onClick={() => setSelectedCategory("All")}
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
                onClick={() => setSelectedCategory(category)}
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

      {/* Modal for Mobile */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={toggleModal}>
              &times;
            </button>
            <div className="filter-dropdown">
              <h2>Filter</h2>
              <div className="filter-section">
                <h3>Completion Status</h3>
                <ul className="filter-options">
                  <li
                    className={selectedStatus === "All" ? "active" : ""}
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedStatus("All");
                    }}
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
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedStatus("Completed");
                    }}
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
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedStatus("Incomplete");
                    }}
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
                    onClick={() => {
                      setIsModalOpen(false);
                      setSelectedCategory("All");
                    }}
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
                      onClick={() => {
                        setIsModalOpen(false);
                        setSelectedCategory(category);
                      }}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;

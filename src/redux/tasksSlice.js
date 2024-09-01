import { createSlice } from "@reduxjs/toolkit";
import { saveState, loadState } from "../utils/localStorage";

const initialState = loadState();

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { title, id, status, categories, descriptions } = action.payload;
      state.tasks.push({ title, id, status, categories, descriptions });

      categories.forEach((category) => {
        if (!state.categories.includes(category)) {
          state.categories.push(category);
        }
      });
      state.filteredTasks = state.tasks;

      saveState(state);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
        state.filteredTasks = state.tasks;
        saveState(state);
      }
    },
    deleteTask: (state, action) => {
      const { id, categories } = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
      state.categories = state.categories.filter(
        (category) =>
          !categories.includes(category) ||
          state.tasks.some((task) => task.category === category)
      );

      state.filteredTasks = state.tasks;
      saveState(state);
    },
    filterByCategory: (state, action) => {
      const { category, status } = action.payload;
      state.filteredTasks = state.tasks.filter((task) => {
        const matchesCategory =
          category === "All" || task.categories.includes(category);
        const matchesStatus =
          status === "All" ||
          (status === "Completed" && task.status.name === "Completed") ||
          (status === "Incomplete" && task.status.name === "Incomplete");
        return matchesCategory && matchesStatus;
      });
    },
    updateTask: (state, action) => {
      const { id, title, categories, descriptions } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.categories = categories;
        task.descriptions = descriptions;

        const allCategories = state.tasks.flatMap((t) => t.categories);
        state.categories = Array.from(new Set(allCategories));

        categories.forEach((category) => {
          if (!state.categories.includes(category)) {
            state.categories.push(category);
          }
        });

        state.filteredTasks = state.tasks;
        saveState(state);
      }
    },
  },
});

export const {
  addTask,
  updateTaskStatus,
  deleteTask,
  filterByCategory,
  updateTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;

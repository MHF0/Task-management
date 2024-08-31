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

      saveState(state);
    },
    updateTaskStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.status = status;
        saveState(state);
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== id);
      saveState(state);
    },
    filterByCategory: (state, action) => {
      const { category } = action.payload;
      state.filteredTasks = state.tasks.filter((task) =>
        task.categories.includes(category)
      );
    },
    updateTask: (state, action) => {
      const { id, title, categories, descriptions } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.categories = categories;
        task.descriptions = descriptions;

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

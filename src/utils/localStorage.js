export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasksState");
    if (serializedState === null) {
      return { tasks: [], categories: [] };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return { tasks: [], categories: [] };
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("tasksState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

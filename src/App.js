import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="main-content">
        {/* Filter  */}
        <div className="filter"></div>
        {/* Tasks  */}
        <div className="tasks">
          <Task />
        </div>
      </div>
    </div>
  );
};

export default App;

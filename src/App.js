import { useSelector } from "react-redux";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Task from "./components/Task";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const App = () => {
  const tasks = useSelector((state) => state.tasks.filteredTasks);
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="main-content">
        {/* Filter  */}
        <div className="filter">
          <Filter />
        </div>
        {/* Tasks  */}
        <div className="tasks">
          {tasks.length > 0 ? (
            <Task />
          ) : (
            <DotLottieReact
              src="https://lottie.host/a310598f-89da-4980-bd52-ad4648bd009e/zddfxKWPOb.json"
              loop
              autoplay
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

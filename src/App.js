import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <div className="main-content">
        {/* Filter  */}
        <div className="filter"></div>
        {/* Tasks  */}
        <div className="tasks"></div>
      </div>
    </div>
  );
};

export default App;

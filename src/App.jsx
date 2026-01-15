import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <main className="main-ui-section">
          <Sidebar />
          <Dashboard />
        </main>
      </div>
    </>
  );
}

export default App;

import Applications from "./Applications";
import "./dashboard.css";
import DashboardCards from "./DashboardCards";
import FilterBar from "./FilterBar";
import Rightside from "./Rightside";

export default function Dashboard() {
  return (
    <div className="dashboard">

      <div className="dashboard-header-row">
        <div className="greeting-container">
          <p className="greeting-text">
            Hey, Good Morning <span style={{ fontWeight: 700 }}>Diksha!</span>
          </p>
        </div>
        <div className="dashboard-actions">
          <button className="btn-refresh">Refresh Dashboard</button>
          <button className="btn-register">Register Student</button>
        </div>
      </div>

      <div className="main-content-wrapper">

        <div className="left-content-area">
          <div className="filter-content">
            <FilterBar />
          </div>

          <div className="message-details">
            <DashboardCards />
          </div>

          <div className="table-responsive-wrapper">
            <Applications />
          </div>
        </div>


        <aside className="right-side-content">
          <Rightside />
        </aside>
      </div>
    </div>
  );
}

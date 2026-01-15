import { useState } from "react";
import "./sidebar.css";
import homeIcon from "../assets/home.svg";
import studentIcon from "../assets/students.svg";
import applicationIcon from "../assets/application.svg";
import searchIcon from "../assets/search-course.svg";
import walletIcon from "../assets/walletIcon.svg";
import commisionIcon from "../assets/commision.svg";
import learningIcon from "../assets/learning.svg";
import alliedIcon from "../assets/allied.svg";
import linkIcon from "../assets/links.svg";
import feedbackIcon from "../assets/feedback.svg";
import sidebarshowIcon from "../assets/sidebarshow.svg";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const navItems = [
    { icon: homeIcon, label: "Dashboard", active: true },
    { icon: studentIcon, label: "Students" },
    { icon: applicationIcon, label: "Applications" },
    { icon: searchIcon, label: "Search Courses" },
    { icon: walletIcon, label: "Wallet" },
    { icon: commisionIcon, label: "Commission Payments" },
    { icon: alliedIcon, label: "Allied Services", hasChevron: true },
    { icon: learningIcon, label: "Learning Resources" },
    { icon: linkIcon, label: "Quick Links", hasChevron: true },
  ];

  return (
    <aside className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
 
      <div className="toggle-wrapper">
        <button className="collapse-btn" onClick={toggleSidebar}>
          <img
            src={sidebarshowIcon}
            alt="toggle"
            className={isExpanded ? "icon-rotated" : ""}
          />
        </button>
      </div>

      <nav className="nav-group">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`nav-item ${item.active ? "dashboard-active" : ""}`}
          >
            <div className="nav-content">
              <img src={item.icon} alt={item.label} className="nav-svg" />
              {isExpanded && <span className="label-text">{item.label}</span>}
            </div>
            {isExpanded && item.hasChevron && (
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9L12 15L18 9" />
              </svg>
            )}
          </div>
        ))}
      </nav>

      <div className="feedback-section">
        <div className="nav-item">
          <div className="nav-content">
            <img src={feedbackIcon} alt="feedback" className="nav-svg" />
            {isExpanded && <span className="label-text">Submit feedback</span>}
          </div>
        </div>
      </div>
    </aside>
  );
}

import "./dashboard.css";
import eventImg from "../assets/event.png";
import Contact from "./Contactpage";
import newsIcon from "../assets/news.svg";
import slideIcon from "../assets/slide.svg";
import pageSlide from "../assets/pageslide.svg";

export default function Rightside() {
  return (
    <>
      <div className="side-widget-card">
        <div className="widget-header">
          <h3>News Bulletin</h3>
        </div>
        <div className="news-item">
          <div className="news-icon">
            <img src={newsIcon} alt="news" />
          </div>
          <div className="news-info">
            <h4>Indian student tops harvard!</h4>
            <p>
              Indian student tops harward university and makes history. Its the
              first time for an Indian student to do this.
              <a href="#">Read More</a>
            </p>
          </div>
        </div>
        <img src={slideIcon} alt="slide" />
        <div className="dot-nav">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="side-widget-card">
        <div className="widget-header">
          <h3>Upcoming Events</h3>
          <div className="arrow-nav">
            <img src={pageSlide} alt="slide" />
          </div>
        </div>
        <div className="event-banner">
          <img src={eventImg} alt="event" />
        </div>
        <div className="event-details">
          <h4>Event Name Goes here</h4>
          <p className="event-meta">7 Jan 2023 | 4:30 PM</p>
          <p className="event-sub">University of New York</p>
          <button className="event-reg-btn">Register Now</button>
        </div>
      </div>

      <div className="quick-links">
        <p className="quick-links-title">Quick Links</p>

        <div className="link-item">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Learning Resources
          </a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8F9297"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>

        <div className="link-item">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Learning Resources
          </a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8F9297"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>

        <div className="link-item">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Learning Resources
          </a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8F9297"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>

        <div className="link-item">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Learning Resources
          </a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8F9297"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>

        <div className="link-item">
          <a href="#" target="_blank" rel="noopener noreferrer">
            Learning Resources
          </a>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8F9297"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>
      </div>

      <div className="contact">
        <Contact />
      </div>
    </>
  );
}

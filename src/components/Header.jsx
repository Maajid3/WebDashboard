import "./header.css";
import logo from "../assets/logo.svg";
import searchIcon from "../assets/searchIcon.svg";
import announceIcon from "../assets/announceIcon.svg";
import notficationIcon from "../assets/notificationIcon.svg";
import userIcon from "../assets/userIcon.svg";
import showDetailIcon from "../assets/showDetailIcon.svg";

function Header() {
  return (
    <>
      <header className="main-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="search-bar">
          <img src={searchIcon} alt="search" />
          <input type="search" placeholder="Search by sudent name, ack no." />
        </div>

        <div className="header-info">
          <div className="announcement">
            <img src={announceIcon} alt="icon" />
            <a href="/">What's New?</a>
          </div>

          <div className="notification">
            <img src={notficationIcon} alt="notifications" />
          </div>

          <div className="userAccount">
            <img src={userIcon} alt="userIcon" />
            <span>Diksha Goel</span>
            <img src={showDetailIcon} alt="show" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

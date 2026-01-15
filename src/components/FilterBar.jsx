import  { useState } from 'react';
import './FilterBar.css';
import calenderIcon from "../assets/calenderIcon.svg";
import calenderIcon2 from "../assets/calenderIcon2.svg";
import countriesIcon from "../assets/countriesIcon.svg";

const FilterBar = () => {
  const [filters, setFilters] = useState({
    year: "",
    dateCreated: "",
    intake: "",
    country: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="filter-card-container">

      <div className="select-wrapper year-wrapper">
        <select name="year" value={filters.year} onChange={handleChange}>
          <option value="" disabled>Year</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
        <div className="textfield">
          <div className="frame-content">
            <img src={calenderIcon} alt="" />
            <span className={`label ${filters.year ? 'selected' : ''}`}>
              {filters.year || "Year"}
            </span>
          </div>
          <i className="arrow-down"></i>
        </div>
      </div>

      
      <div className="select-wrapper date-wrapper">
        <select name="dateCreated" value={filters.dateCreated} onChange={handleChange}>
          <option value="" disabled>Date Created</option>
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
        <div className="textfield">
          <div className="frame-content">
            <img src={calenderIcon} alt="" />
            <span className={`label ${filters.dateCreated ? 'selected' : ''}`}>
              {filters.dateCreated || "Date Created"}
            </span>
          </div>
          <i className="arrow-down"></i>
        </div>
      </div>

      <div className="select-wrapper intake-wrapper">
        <select name="intake" value={filters.intake} onChange={handleChange}>
          <option value="" disabled>Select intake</option>
          <option value="jan">January</option>
          <option value="sep">September</option>
        </select>
        <div className="textfield">
          <div className="frame-content">
            <img src={calenderIcon2} alt="" />
            <span className={`label ${filters.intake ? 'selected' : ''}`}>
              {filters.intake || "Select intake"}
            </span>
          </div>
          <i className="arrow-down"></i>
        </div>
      </div>

      <div className="select-wrapper country-wrapper">
        <select name="country" value={filters.country} onChange={handleChange}>
          <option value="" disabled>Countries</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="canada">Canada</option>
        </select>
        <div className="textfield">
          <div className="frame-content">
            <img src={countriesIcon} alt="" />
            <span className={`label ${filters.country ? 'selected' : ''}`}>
              {filters.country || "Countries"}
            </span>
          </div>
          <i className="arrow-down"></i>
        </div>
      </div>

      <button className="apply-filters-btn">Apply Filters</button>
    </div>
  );
};

export default FilterBar;
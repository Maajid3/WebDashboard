import React from "react";
import "./applications.css";
import resizeIcon from "../assets/resize.svg";
import filterIcon from "../assets/filter.svg";

const applicationsData = [
  {
    id: "117110/22-23",
    name: "Rishi Joshi",
    email: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc Internatio...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
  {
    id: "117110/22-23",
    name: "Viren Shah",
    email: "virensha24@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc Internatio...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
  {
    id: "117110/22-23",
    name: "Tushar Joshi",
    email: "rishijoshi@gmail.com",
    university: "Sheffield Hallam...",
    program: "Msc Internatio...",
    pending: "1 Day",
    date: "12 Dec 2022",
  },
  // Add more rows as needed
];

export default function ApplicationsTable() {
  return (
    <div className="table-card">
      <div className="table-header">
        <h2>Applications</h2>
        <button className="icon-btn">
          <img src={resizeIcon} alt="resize" />
        </button>
      </div>

      <div className="tabs">
        <button className="tab active">Pending On Me (15)</button>
        <button className="tab">Lorem Ipsum (12)</button>
        <button className="tab">Lorem Ipsum (18)</button>
      </div>

      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>
                Ack. no. <img src={filterIcon} alt="filter" />
              </th>
              <th>
                Student name <img src={filterIcon} alt="filter" />
              </th>
              <th>
                University <img src={filterIcon} alt="filter" />
              </th>
              <th>
                Program <img src={filterIcon} alt="filter" />
              </th>
              <th>
                Pending Since <img src={filterIcon} alt="filter" />
              </th>
            </tr>
          </thead>
          <tbody>
            {applicationsData.map((item, index) => (
              <tr key={index}>
                <td className="ack-no">{item.id}</td>
                <td>
                  <div className="student-info">
                    <span className="name">{item.name}</span>
                    <span className="email">{item.email}</span>
                  </div>
                </td>
                <td>{item.university}</td>
                <td>{item.program}</td>
                <td>
                  <div className="pending-info">
                    <span className="days">{item.pending}</span>
                    <span className="date">{item.date}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <div className="page-prev">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#939393"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
        <div className="page-numbers">
          <span className="page-num active">1</span>
          <span className="page-num">2</span>
          <span className="page-num">3</span>
        </div>
        <div className="page-next">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#226CF5"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}

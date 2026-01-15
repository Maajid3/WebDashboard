import React from 'react';
import './dashboard-card.css';

const DashboardCards = () => {
  const cardData = [
    { id: 1, count: "18", label: "Conditional", btnText: "Offer letter", bgColor: "#D5E3FF", accentColor: "#226CF5", borderColor: "#9CBDFB" },
    { id: 2, count: "22", label: "Un-Conditional", btnText: "Offer letter", bgColor: "#EBFFEF", accentColor: "#41A155", borderColor: "#B3EDC0" },
    { id: 3, count: "30", label: "Payment Received", btnText: "All Country", bgColor: "#FFF6DB", accentColor: "#EBB925", borderColor: "#FEE598" },
    { id: 4, count: "8", label: "Payment Received", btnText: "Offer letter", bgColor: "#FFF0F2", accentColor: "#FF2E42", borderColor: "#FDCED5" },
    { id: 5, count: "8", label: "VISA Received", btnText: "Offer letter", bgColor: "#EEEEEE", accentColor: "#616262", borderColor: "#D2D2D2" }
  ];

  return (
    <div className="stats-group-container">
      {cardData.map((card) => (
        <div key={card.id} className="stat-card-wrapper">
          <div 
            className="card-background" 
            style={{ backgroundColor: card.bgColor }}
          >
            <h2 className="card-count" style={{ color: card.accentColor }}>
              {card.count}
            </h2>
            <p className="card-label">{card.label}</p>
          </div>

          <div 
            className="card-tag" 
            style={{ borderColor: card.borderColor }}
          >
            <span className="tag-text" style={{ color: card.accentColor }}>
              {card.btnText}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
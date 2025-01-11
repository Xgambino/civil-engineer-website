import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";

// WorkCard Component
const WorkCard = ({ imgsrc, title, subtitle, date, text, link }) => {
  return (
    <div className="project-card">
      {/* Dynamic alt text for accessibility */}
      <img src={imgsrc} alt={title} className="project-image" />
      
      <h2 className="project-title">{title}</h2>
      
      {/* Conditionally render subtitle and date */}
      {subtitle && <h3 className="project-subtitle">{subtitle}</h3>}
      {date && <p className="project-date">{date}</p>}

      <div className="project-details">
        <p>{text}</p>
        
        {/* Conditionally render the "View" button if link is provided */}
        <div className="project-btns">
          <NavLink to={link} target="_blank" className="btn">
            View
          </NavLink>
          <NavLink to={link} target="_blank" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

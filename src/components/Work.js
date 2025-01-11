import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from "react";

const Work = () => {

  return (
    <div className="work-container">
      <h1 className="project-heading"> Experience</h1>
      <div className="project-container">
        {WorkCardData.map((project, ind) => {
          return (
            <WorkCard
              key={ind}
              imgsrc={project.imgsrc}
              title={project.title}
              subtitle={project.subtitle}
              date={project.date}
              text={project.text}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;

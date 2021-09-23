import React from "react";
import ProjectCard from "../../atoms/project-card/projectCard";
import "./projectSection.scss";

const ProjectSection = () => {
  return (
    <div className="m-projects-container">
      <div className="m-projects-title hide-on-mobile">
        <p>Current Tools</p>
      </div>
      <div className="m-projects-list">
        <div className="m-projects-mobiletitle hide-on-desktop">
          <p>Current Tools</p>
        </div>
        <div className=" m-projects-projectcards">
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

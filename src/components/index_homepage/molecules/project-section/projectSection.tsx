import React from "react";
import ProjectCard from "../../atoms/project-card/projectCard";
import "./projectSection.scss";

const PROJECTS = [
  {
    image: "01bg.jpg",
    projectName: "WOTV Account Review Tool",
    projectDescription:
      "The Account Review Tool for WAR OF THE VISIONS FINAL FANTASY BRAVE EXVIUS evaluates the number of units, espers, vision cards, and +5 equipment that a player has based on either Krispy-Kreme or Dunkin' guild standards and exports the results in PDF format.",
    url: "/review_tool",
  },
];

const ProjectSection = () => {
  return (
    <div className="m-projects-container">
      <div className="m-projects-title">
        <p>Current Tools</p>
      </div>
      <div className="m-projects-list">
        <div className=" m-projects-projectcards">
          {PROJECTS.map(
            ({ image, projectName, projectDescription, url }, index) => (
              <ProjectCard
                image={image}
                key={index}
                index={index}
                projectName={projectName}
                projectDescription={projectDescription}
                url={url}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

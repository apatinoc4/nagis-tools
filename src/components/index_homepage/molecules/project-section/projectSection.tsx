import { useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import ProjectCard from "../../atoms/project-card/projectCard";
import { ViewportContext } from "../../../general/context/viewPortProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import "./projectSection.scss";

const PROJECTS = [
  {
    image: "01bg.jpg",
    projectName: "WOTV Account Review Tool",
    projectDescription:
      "Account Review Tool for WAR OF THE VISIONS FINAL FANTASY BRAVE EXVIUS evaluates the number of units, espers, vision cards, and +5 equipment that a player has based on either Krispy-Kreme or Dunkin' guild standards and exports the results in PDF format.",
    url: "/review_tool",
  },
  {
    image: "02bg.jpg",
    projectName: "WOTV Unit Planner",
    projectDescription:
      "Tool designed for WAR OF THE VISIONS FINAL FANTASY BRAVE EXVIUS players - the Unit Milestone Calculator. This tool helps you easily track the progress of your units and predicts when they will reach important milestones such as level 99, level 120, and level 140 based on your initial unit shards. ",
    url: "/unit_planner",
  },
];

const ProjectSection = () => {
  const viewport = useContext(ViewportContext);
  const isMobile = viewport === "mobile";

  return (
    <div className="m-projects-container" id="project-section">
      <div className="m-projects-title">
        <p>Current Tools</p>
      </div>
      <div className="m-projects-list">
        <div className=" m-projects-projectcards">
          {!isMobile ? (
            <>
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
            </>
          ) : (
            <Carousel>
              {PROJECTS.map(
                ({ image, projectName, projectDescription, url }, index) => (
                  <Carousel.Item key={index}>
                    <ProjectCard
                      image={image}
                      index={index}
                      mobile={isMobile}
                      projectName={projectName}
                      projectDescription={projectDescription}
                      url={url}
                    />
                  </Carousel.Item>
                )
              )}
            </Carousel>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

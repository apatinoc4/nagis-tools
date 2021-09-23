import React from "react";
import "./projectCard.scss";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="a-projectcard-container">
      <p className="a-projectcard-projectname">01. WOTV Account Review Tool</p>
      <div className="a-projectcard-card">
        <img
          src={
            require("../../../../assets/index_homepage/backgrounds/01bg.jpg")
              .default
          }
          alt="01bg"
        />
        <div className="a-projectcard-bg"></div>
        <div className="a-projectcard-projectno">
          <p>01</p>
        </div>
        <div className="a-projectcard-description">
          <p>
            Account review tool for WAR OF THE VISIONS FINAL FANTASY BRAVE
            EXVIUS,evaluate how many units, espers, vision cards and +5
            equipment the player has by either Krispy-Kreme or Dunkin´ guild
            standards and export it in PDF format.
          </p>
          <Link to="/review_tool">
            <button>Visit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

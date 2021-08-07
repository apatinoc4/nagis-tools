import React from "react";
import "./projectCard.scss";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="a-projectcard-container">
      <p className="a-projectcard-projectname">01. WOTV Account Review Tool</p>
      <div className="a-projectcard-card">
        <img
          src={require("../../../assets/backgrounds/01bg.jpg").default}
          alt="01bg"
        />
        <div className="a-projectcard-bg"></div>
        <div className="a-projectcard-projectno">
          <p>01</p>
        </div>
        <div className="a-projectcard-description">
          <p>
            Account review tool for WAR OF THE VISIONS FINAL FANTASY BRAVE
            EXVIUS used to evaluate how many units, espers, vision cards and +5
            equipment the player has by either Krispy-Kreme or Dunkin´ guild
            standards, generating a PDF file with this information when done.
          </p>
          <Link to="/review-tool">
            <button>Visit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

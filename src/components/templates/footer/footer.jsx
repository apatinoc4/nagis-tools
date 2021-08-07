import React from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="t-footer-container">
        <div className="t-footer-contact">
          <p>Have some fun ideas for a project?</p>
          <a href="mailto: apatinoc4@gmail.com">
            <button>Hit me up!</button>
          </a>
        </div>
        <div className="t-footer-body">
          <div className="t-footer-socialmedia">
            <a href="https://www.instagram.com/apatinoc4/">
              <FontAwesomeIcon
                className="t-footer-socialmedia--icon"
                icon={["fab", "instagram"]}
                size="lg"
              />
            </a>
            <a href="https://www.linkedin.com/in/andrespatino1993/">
              <FontAwesomeIcon
                className="t-footer-socialmedia--icon"
                icon={["fab", "linkedin"]}
                size="lg"
              />
            </a>
            <a href="https://github.com/apatinoc4">
              <FontAwesomeIcon
                className="t-footer-socialmedia--icon"
                icon={["fab", "github"]}
                size="lg"
              />
            </a>
          </div>
        </div>
        <div className="t-footer-copyright">
          <p className="t-footer-copyright--copy">
            Copyright &copy; {getCurrentYear()}
          </p>
          <p className="t-footer-copyright--name">Andrés Patiño</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

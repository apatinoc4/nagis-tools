import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
const logoWhite = require("../../../assets/main-logo/mainLogoWhite.svg");

const Header = () => {
  return (
    <header>
      <div className="t-header-container">
        <div className="t-header-logo">
          <img src={logoWhite.default} alt="logoWhite" />
        </div>
        <div className="t-header-nav">
          <nav>
            <ul className="t-header-navlist">
              <Link to="/">
                <li className="t-header-navlist--li">HOME</li>
              </Link>
              <Link to="/review-tool">
                <li className="t-header-navlist--li">TOOLS</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

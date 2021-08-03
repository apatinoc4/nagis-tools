import React from "react";
import "./footer.scss";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer>
      <div className="t-footer-container">
        <div className="t-footer-body"></div>
        <div className="t-footer-copyright">
          <p>Copyright &copy; {getCurrentYear()}</p>
          <p>Andrés Patiño</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

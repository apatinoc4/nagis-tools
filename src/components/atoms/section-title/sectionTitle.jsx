import React from "react";
import "./sectionTitle.scss";

const SectionTitle = (props) => {
  let { iconName, title } = props;
  return (
    <div className="a-sectiontitle-container">
      <div className="a-sectiontitle-pusher"></div>
      <div className="a-sectiontitle-contents">
        <img
          src={require(`../../../assets/images/${iconName}-white.svg`).default}
          alt="espericon"
        />
        <div className="a-sectiontitle-contents--sidebar"></div>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SectionTitle;

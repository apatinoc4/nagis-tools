import React from "react";
import "./overviewField.scss";

const OverviewField = (props) => {
  const { title, description } = props;
  return (
    <div className="a-overviewfield-container">
      <p>{title}</p>
      <div className="a-overviewfield-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OverviewField;

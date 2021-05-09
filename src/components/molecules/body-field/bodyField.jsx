import React from "react";
import MaxedStats from "../../atoms/maxed-stats/maxedStats";
import SectionTitle from "../../atoms/section-title/sectionTitle";
import "./bodyField.scss";

const BodyField = (props) => {
  let { type, accountInfo, maxedStats } = props;
  let keyword;
  let title;
  let accInfo;

  switch (type) {
    case "units":
      keyword = "units";
      title = "UNITS";
      accInfo = accountInfo.units;
      break;
    case "espers":
      keyword = "espers";
      title = "ESPERS";
      accInfo = accountInfo.espers;
      break;
    case "vcs":
      keyword = "vcs";
      title = "VISION CARDS";
      accInfo = accountInfo.vcs;
      break;
    case "gear":
      keyword = "gear";
      title = "GEAR";
      accInfo = accountInfo.gear;
      break;
    default:
  }
  return (
    <div className="m-bodyfield-container">
      <SectionTitle iconName={keyword} title={title} />
      <div className="m-bodyfield-body">
        <MaxedStats type={keyword} maxedStats={maxedStats} />
        <div className="m-bodyfield-description">
          <p>{accInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default BodyField;

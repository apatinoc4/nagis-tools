import React from "react";
import "./maxedStats.scss";

const MaxedStats = (props) => {
  let { type, maxedStats } = props;
  let amazing = {
    units: 12,
    espers: 9,
    vcs: 7,
    gear: 12,
  };
  let minimum = {
    units: 8,
    espers: 6,
    vcs: 4,
    gear: 8,
  };
  let maxedAmount;
  let amazingStats;
  let minimumStats;
  let category;
  switch (type) {
    case "units":
      maxedAmount = maxedStats.maxUnits;
      amazingStats = amazing.units;
      minimumStats = minimum.units;
      category = "Maxed URs";
      break;
    case "espers":
      maxedAmount = maxedStats.maxEspers;
      amazingStats = amazing.espers;
      minimumStats = minimum.espers;
      category = "Maxed";
      break;
    case "vcs":
      maxedAmount = maxedStats.maxVcs;
      amazingStats = amazing.vcs;
      minimumStats = minimum.vcs;
      category = "Maxed";
      break;
    case "gear":
      maxedAmount = maxedStats.maxGear;
      amazingStats = amazing.gear;
      minimumStats = minimum.gear;
      category = "+5 Gear";
      break;
    default:
  }
  return (
    <div className="a-maxedstats-container">
      <p className="a-maxedstats-amount">
        {maxedAmount !== "" ? maxedAmount : "-"}
      </p>
      <p className="a-maxedstats-category">{category}</p>
      <p className="a-maxedstats-veredict">
        {parseInt(maxedAmount) > amazingStats
          ? "Amazing!"
          : parseInt(maxedAmount) >= minimumStats
          ? "Good"
          : parseInt(maxedAmount) < minimumStats
          ? "Needs Work"
          : "-"}
      </p>
    </div>
  );
};

export default MaxedStats;

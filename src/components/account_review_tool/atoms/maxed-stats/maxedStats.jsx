import React, { useContext } from "react";
import { ReportContext } from "../../context/reportToolProvider";
import "./maxedStats.scss";

const MaxedStats = (props) => {
  const { maxedStat, type } = props;
  const { amazing, minimum } = useContext(ReportContext);

  const RATING_INFO = {
    units: {
      amazingStats: amazing.units,
      minimumStats: minimum.units,
      category: "Ex Units",
    },
    espers: {
      amazingStats: amazing.espers,
      minimumStats: minimum.espers,
      category: "Maxed",
    },
    vcs: {
      amazingStats: amazing.vcs,
      minimumStats: minimum.vcs,
      category: "Maxed",
    },
    gear: {
      amazingStats: amazing.gear,
      minimumStats: minimum.gear,
      category: "+5 Gear",
    },
  };

  const rateMaxedResources = (maxedStat, ratingInfo, resourceType) => {
    const { category, amazingStats, minimumStats } = ratingInfo[resourceType];
    const ratingVeredict =
      maxedStat > amazingStats
        ? "Amazing!"
        : maxedStat >= minimumStats
        ? "Good"
        : maxedStat < minimumStats
        ? "Needs Work"
        : "";

    return { category, ratingVeredict };
  };

  const { category, ratingVeredict } = rateMaxedResources(
    maxedStat,
    RATING_INFO,
    type
  );

  return (
    <div className={`a-maxedstats-container`}>
      <p className="a-maxedstats-amount">{maxedStat}</p>
      <p className="a-maxedstats-category">{category}</p>
      <p className="a-maxedstats-veredict">{ratingVeredict}</p>
    </div>
  );
};

export default MaxedStats;

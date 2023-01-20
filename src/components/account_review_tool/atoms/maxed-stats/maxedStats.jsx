import React, { useContext } from "react";
import { ReportContext } from "../../context/reportToolProvider";
import "./maxedStats.scss";

const MaxedStats = (props) => {
  const { maxedStats, type } = props;
  const { amazing, minimum } = useContext(ReportContext);

  const RATING_INFO = {
    units: {
      maxedAmount: Number(maxedStats.maxUnits),
      amazingStats: amazing.units,
      minimumStats: minimum.units,
      category: "Ex Units",
    },
    espers: {
      maxedAmount: Number(maxedStats.maxEspers),
      amazingStats: amazing.espers,
      minimumStats: minimum.espers,
      category: "Maxed",
    },
    vcs: {
      maxedAmount: Number(maxedStats.maxVcs),
      amazingStats: amazing.vcs,
      minimumStats: minimum.vcs,
      category: "Maxed",
    },
    gear: {
      maxedAmount: Number(maxedStats.maxGear),
      amazingStats: amazing.gear,
      minimumStats: minimum.gear,
      category: "+5 Gear",
    },
  };

  const rateMaxedResources = (ratingInfo, resourceType) => {
    const { category, amazingStats, maxedAmount, minimumStats } =
      ratingInfo[resourceType];
    const ratingVeredict =
      maxedAmount > amazingStats
        ? "Amazing!"
        : maxedAmount >= minimumStats
        ? "Good"
        : maxedAmount < minimumStats
        ? "Needs Work"
        : "";

    return { category, maxedAmount, ratingVeredict };
  };

  const { category, maxedAmount, ratingVeredict } = rateMaxedResources(
    RATING_INFO,
    type
  );

  return (
    <div className={`a-maxedstats-container`}>
      <p className="a-maxedstats-amount">{maxedAmount}</p>
      <p className="a-maxedstats-category">{category}</p>
      <p className="a-maxedstats-veredict">{ratingVeredict}</p>
    </div>
  );
};

export default MaxedStats;

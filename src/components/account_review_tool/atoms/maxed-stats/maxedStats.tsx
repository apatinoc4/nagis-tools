import React, { useContext } from "react";
import { ReportContext } from "../../context/reportToolProvider";
import "./maxedStats.scss";

interface MaxedStatsProps {
  maxedStat: number;
  type: string;
}

type RatingInfo = {
  [key: string]: {
    amazingStats: number;
    category: string;
    minimumStats: number;
  };
};

const MaxedStats = (props: MaxedStatsProps) => {
  const { maxedStat, type } = props;
  const { amazing, minimum } = useContext(ReportContext);

  const RATING_INFO = {
    units: {
      amazingStats: amazing.units,
      category: "Ex Units",
      minimumStats: minimum.units,
    },
    espers: {
      amazingStats: amazing.espers,
      category: "Maxed",
      minimumStats: minimum.espers,
    },
    vcs: {
      amazingStats: amazing.vcs,
      category: "Maxed",
      minimumStats: minimum.vcs,
    },
    gear: {
      amazingStats: amazing.gear,
      category: "+5 Gear",
      minimumStats: minimum.gear,
    },
  };

  const rateMaxedResources = (
    maxedStat: number,
    ratingInfo: RatingInfo,
    resourceType: string
  ) => {
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
    <div className="a-maxedstats-container">
      <p className="a-maxedstats-amount">{maxedStat}</p>
      <p className="a-maxedstats-category">{category}</p>
      <p className="a-maxedstats-veredict">{ratingVeredict}</p>
    </div>
  );
};

export default MaxedStats;

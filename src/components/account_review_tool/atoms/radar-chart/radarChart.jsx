import React from "react";
import { Radar } from "react-chartjs-2";
import "./radarChart.scss";

const RadarChart = (props) => {
  let { maxedStats, amazing } = props;
  const percentageCalculator = (current, expected) => {
    if (current > expected) {
      return 100;
    } else {
      return (100 * current) / expected;
    }
  };
  let maxedUnits = percentageCalculator(maxedStats.maxUnits, amazing.units);
  let maxedEspers = percentageCalculator(maxedStats.maxEspers, amazing.espers);
  let maxedVcs = percentageCalculator(maxedStats.maxVcs, amazing.vcs);
  let maxedGear = percentageCalculator(maxedStats.maxGear, amazing.gear);
  const data = {
    labels: ["Units", "Espers", "Vision Cards", "Gear"],
    datasets: [
      {
        label: "# of Votes",
        data: [maxedUnits, maxedEspers, maxedVcs, maxedGear],
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        color: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
      },
    ],
  };
  var options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
        pointLabels: {
          color: "white",
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };
  return (
    <div className="a-radarchart-container">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;

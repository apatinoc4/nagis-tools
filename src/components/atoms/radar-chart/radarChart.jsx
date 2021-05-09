import React from "react";
import { Radar } from "react-chartjs-2";
import "./radarChart.scss";

const RadarChart = (props) => {
  const percentageCalculator = (current, expected) => {
    if (current > expected) {
      return 100;
    } else {
      return (100 * current) / expected;
    }
  };
  let maxedUnits = percentageCalculator(props.maxedStats.maxUnits, 12);
  let maxedEspers = percentageCalculator(props.maxedStats.maxEspers, 7);
  let maxedVcs = percentageCalculator(props.maxedStats.maxVcs, 12);
  let maxedGear = percentageCalculator(props.maxedStats.maxGear, 12);
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
          font: {
            size: 10,
          },
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

import React, { useContext } from "react";
import { ReportContext } from "../../context/reportToolProvider";
import { Radar } from "react-chartjs-2";
import "./radarChart.scss";

const RadarChart = (props) => {
  const { maxedStats } = props;
  const titleBlue = "#243e66";
  const percentageCalculator = (current, expected) => {
    if (current > expected) {
      return 100;
    } else {
      return (100 * current) / expected;
    }
  };
  const { amazing } = useContext(ReportContext);
  const maxedUnits = percentageCalculator(maxedStats.maxUnits, amazing.units);
  const maxedEspers = percentageCalculator(
    maxedStats.maxEspers,
    amazing.espers
  );
  const maxedVcs = percentageCalculator(maxedStats.maxVcs, amazing.vcs);
  const maxedGear = percentageCalculator(maxedStats.maxGear, amazing.gear);
  const wlength = window.innerWidth;
  const data = {
    labels: ["Units", "Espers", "Vision Cards", "Gear"],
    datasets: [
      {
        label: "# of Votes",
        data: [maxedUnits, maxedEspers, maxedVcs, maxedGear],
        backgroundColor: "rgba(36, 62, 102, 0.4)",
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
          color: titleBlue,
          font: {
            size: wlength >= 1024 ? "10%" : "5%",
          },
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };
  return (
    <div className="a-radarchart-container">
      <div className="a-radarchart-title">
        <p>ACCOUNT HEATMAP</p>
      </div>
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;

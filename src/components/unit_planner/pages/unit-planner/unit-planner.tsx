import { useState } from "react";
import "./unit-planner.scss";
import UnitCard from "../../molecules/unit-card/unit-card";
import Button from "@mui/material/Button";

const currentDate = new Date();
const formatDate = (date: Date) => ({
  day: date
    .toLocaleDateString("en-US", {
      weekday: "long",
    })
    .replace(",", "")
    .toUpperCase(),
  monthYear: date
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(",", "")
    .toUpperCase(),
});

const { day, monthYear } = formatDate(currentDate);

const UnitPlanner = () => {
  const [unitCount, setUnitCount] = useState<number>(1);

  return (
    <div className="p-unitPlanner-container">
      <div className="p-unitPlanner-currentDate">
        <p>TODAYS DATE</p>
        <p>
          <span>{day}</span> {monthYear}
        </p>
      </div>
      <div className="p-unitPlanner-buttons">
        <Button
          disabled={unitCount === 5}
          onClick={() => setUnitCount(unitCount + 1)}
          variant="contained"
        >
          Add Unit
        </Button>
        <Button
          disabled={unitCount === 1}
          onClick={() => setUnitCount(unitCount - 1)}
          variant="contained"
        >
          Remove Unit
        </Button>
      </div>
      <div className="p-unitPlanner-unitCards">
        {[...Array(unitCount)].map((e, idx) => (
          <UnitCard key={idx} unitNumber={idx} />
        ))}
      </div>
    </div>
  );
};

export default UnitPlanner;

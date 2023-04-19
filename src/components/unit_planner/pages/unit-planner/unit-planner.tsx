import { useState } from "react";
import "./unit-planner.scss";
import UnitDisplayer from "../../molecules/unit-displayer/unit-displayer";
import Button from "@mui/material/Button";

const currentDate = new Date();

const UnitPlanner = () => {
  const [unitCount, setUnitCount] = useState<number>(1);

  return (
    <div className="p-unitPlanner-container">
      <p>Todays Date {currentDate.toDateString()}</p>
      <div style={{ display: "flex", flexDirection: "row" }}>
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
      <div style={{ display: "flex", flexDirection: "row" }}>
        {[...Array(unitCount)].map((e, idx) => (
          <UnitDisplayer key={idx} />
        ))}
      </div>
    </div>
  );
};

export default UnitPlanner;

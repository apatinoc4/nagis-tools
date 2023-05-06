import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import UnitCard from "../../molecules/unit-card/unit-card";

import "./unit-planner.scss";
import { ViewportContext } from "../../../general/context/viewPortProvider";

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
  const viewport = useContext(ViewportContext);

  const isMobile = viewport === "mobile";

  return (
    <div className="p-unitPlanner-container">
      <div className="p-unitPlanner-currentDate">
        <p>TODAYS DATE</p>
        <p>
          <span>{day}</span> {monthYear}
        </p>
      </div>
      <div className="p-unitPlanner-unitCards">
        {[...Array(unitCount)].map((e, idx) => (
          <UnitCard key={idx} unitNumber={idx} />
        ))}
      </div>
      {!isMobile && (
        <div className="p-unitPlanner-buttons">
          <Button
            className="add-unit unitPlanner-button"
            disabled={unitCount === 5}
            onClick={() => setUnitCount(unitCount + 1)}
            startIcon={<PersonAddAlt1Icon />}
            variant="contained"
          >
            Add Unit
          </Button>
          <Button
            className="remove-unit unitPlanner-button"
            disabled={unitCount === 1}
            onClick={() => setUnitCount(unitCount - 1)}
            startIcon={<PersonRemoveAlt1Icon />}
            variant="contained"
          >
            Remove Unit
          </Button>
        </div>
      )}
    </div>
  );
};

export default UnitPlanner;

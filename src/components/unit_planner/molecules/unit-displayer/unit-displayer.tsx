import { ChangeEvent, useCallback, useEffect, useState, useMemo } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";

import "./unit-displayer.scss";

type MilestoneShards = {
  milestoneKey: string;
  milestoneName: string;
  shardsNeeded: number;
};

type hoursNeededMilestone = {
  [key: string]: number;
};

const MILESTONE_SHARDS = [
  {
    milestoneKey: "level99",
    milestoneName: "Level 99",
    shardsNeeded: 600,
  },
  {
    milestoneKey: "level120",
    milestoneName: "Level 120",
    shardsNeeded: 1000,
  },
  {
    milestoneKey: "level140",
    milestoneName: "Level 140",
    shardsNeeded: 1120,
  },
];

const calculateHoursNeeded = (
  startingShards: number,
  shardsPerHour: number,
  milestoneShards: MilestoneShards[]
): hoursNeededMilestone => {
  const hoursNeeded = milestoneShards.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.milestoneKey]: (cur.shardsNeeded - startingShards) / shardsPerHour,
    }),
    {}
  );

  return hoursNeeded;
};

const currentDate = new Date();

function addHoursToDate(date: any, hours: any) {
  const dateCopy = new Date(date);

  dateCopy.setTime(dateCopy.getTime() + hours * 60 * 60 * 1000);

  return dateCopy.toDateString();
}

const UnitDisplayer = () => {
  const [unitAvailability, setUnitAvailability] = useState<string>("regular");
  const [startingShards, setStartingShards] = useState<number | null>(null);
  const [hoursNeeded, setHoursNeeded] = useState<hoursNeededMilestone | null>(
    null
  );

  const shardsPerHour = useMemo(() => {
    const regular = 4 / 24;
    const limited = 2 / 24;

    return unitAvailability === "regular" ? regular : limited;
  }, [unitAvailability]);

  const displayHoursNeeded = useCallback(() => {
    if (startingShards) {
      setHoursNeeded(
        calculateHoursNeeded(startingShards, shardsPerHour, MILESTONE_SHARDS)
      );
    }
  }, [shardsPerHour, startingShards]);

  const estimatedTimeMessage = useCallback(
    (shardsNeeded: number) => {
      const selectedMilestone = MILESTONE_SHARDS.filter(
        (milestone) => milestone.shardsNeeded === shardsNeeded
      )[0];

      if (startingShards && hoursNeeded) {
        if (startingShards < 0) {
          return;
        } else if (startingShards >= shardsNeeded) {
          return `Congrats! can be reached already`;
        } else {
          return `Can be reached in ${
            hoursNeeded[selectedMilestone.milestoneKey]
          } hours`;
        }
      }
    },
    [hoursNeeded, startingShards]
  );

  useEffect(() => displayHoursNeeded(), [displayHoursNeeded]);

  return (
    <div className="m-unitDisplayer-container">
      <TextField
        id="starting-shards"
        inputProps={{ min: 0, max: 1120 }}
        label="Starting Shards"
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setStartingShards(Number(event.target.value));
        }}
        type="number"
        value={startingShards || ""}
      />
      <FormControl>
        <FormLabel id="unit-availability">Unit Pool</FormLabel>
        <RadioGroup
          name="controlled-radio-buttons-group"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setUnitAvailability(event.target.value);
          }}
          row
          value={unitAvailability}
        >
          <FormControlLabel
            control={<Radio />}
            label="Regular"
            value="regular"
          />
          <FormControlLabel
            control={<Radio />}
            label="Limited"
            value="limited"
          />
        </RadioGroup>
      </FormControl>

      {hoursNeeded && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>Milestones</h2>
          {MILESTONE_SHARDS.map((milestone, idx) => (
            <div key={idx}>
              <h3>{milestone.milestoneName}</h3>
              <div>
                <p>{estimatedTimeMessage(milestone.shardsNeeded)}</p>
                <h4>Estimated Date:</h4>
                <p>
                  {addHoursToDate(
                    currentDate,
                    hoursNeeded[milestone.milestoneKey]
                  )}
                </p>
              </div>
            </div>
          ))}
          {/* <p>{estimatedTimeMessage(MILESTONE_SHARDS[0].shardsNeeded)}</p>
            <p>{estimatedTimeMessage(MILESTONE_SHARDS[1].shardsNeeded)}</p>
            <p>{estimatedTimeMessage(MILESTONE_SHARDS[2].shardsNeeded)}</p> */}
        </div>
      )}
    </div>
  );
};

export default UnitDisplayer;
import "./unit-planner.scss";
import TextField from "@mui/material/TextField";
import { useCallback, useEffect, useState, useMemo } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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

const UnitPlanner = () => {
  const [unitAvailability, setUnitAvailability] = useState<string>("regular");
  const [startingShards, setStartingShards] = useState<number | null>(null);
  const [hoursNeeded, setHoursNeeded] = useState<hoursNeededMilestone | null>(
    null
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUnitAvailability((event.target as HTMLInputElement).value);
  };

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
        const estimatedMilestoneDate = addHoursToDate(
          currentDate,
          hoursNeeded[selectedMilestone.milestoneKey]
        );

        if (startingShards < 0) {
          return;
        } else if (startingShards >= shardsNeeded) {
          return `Congrats!, your unit can reach ${selectedMilestone.milestoneName} already`;
        } else {
          return `Your unit can reach ${
            selectedMilestone.milestoneName
          } in approximately ${
            hoursNeeded[selectedMilestone.milestoneKey]
          } hours, in ${estimatedMilestoneDate}`;
        }
      }
    },
    [hoursNeeded, startingShards]
  );

  useEffect(() => displayHoursNeeded(), [displayHoursNeeded]);

  // if (startingShards && hoursNeeded) {
  //   const newDate = addHoursToDate(currentDate, hoursNeeded.level140);
  //   console.log(currentDate, newDate);
  // }

  return (
    <div className="p-unitPlanner-container">
      <TextField
        id="starting-shards"
        label="Starting Shards"
        type="number"
        value={startingShards || ""}
        inputProps={{ min: 0, max: 1120 }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setStartingShards(Number(event.target.value));
        }}
      />
      <FormControl>
        <FormLabel id="unit-availability">Is unit limited?</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={unitAvailability}
          onChange={handleChange}
        >
          <FormControlLabel
            value="regular"
            control={<Radio />}
            label="Regular"
          />
          <FormControlLabel
            value="limited"
            control={<Radio />}
            label="Limited"
          />
        </RadioGroup>
      </FormControl>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p>Todays Date {currentDate.toDateString()}</p>
        {hoursNeeded && (
          <>
            <p>{estimatedTimeMessage(MILESTONE_SHARDS[0].shardsNeeded)}</p>
            <p>{estimatedTimeMessage(MILESTONE_SHARDS[1].shardsNeeded)}</p>
            <p>{estimatedTimeMessage(MILESTONE_SHARDS[2].shardsNeeded)}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default UnitPlanner;

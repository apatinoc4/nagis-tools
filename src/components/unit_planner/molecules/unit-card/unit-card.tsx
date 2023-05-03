import { ChangeEvent, useCallback, useEffect, useState, useMemo } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";

import "./unit-card.scss";
import MilestoneCalendar from "../milestone-calendar/milestone-calendar";

type MilestoneShards = {
  milestoneKey: string;
  milestoneName: string;
  shardsNeeded: number;
};

type hoursNeededMilestone = {
  [key: string]: number;
};

interface unitCardProps {
  unitNumber: number;
}

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

function addHoursToDate(date: Date, hours: number) {
  const dateCopy = new Date(date);

  dateCopy.setTime(dateCopy.getTime() + hours * 60 * 60 * 1000);

  return dateCopy;
}

const formatDatetoString = (date: Date) => date.toISOString().substring(0, 10);

const UnitCard = (props: unitCardProps) => {
  const { unitNumber } = props;
  const [unitAvailability, setUnitAvailability] = useState<string>("regular");
  const [startingShards, setStartingShards] = useState<number | null>(null);
  const [hoursNeeded, setHoursNeeded] = useState<hoursNeededMilestone | null>(
    null
  );
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const renderEstimatedDates = startingShards && hoursNeeded;

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

  const handleChangeStartingShards = (event: ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) <= 1120) {
      setStartingShards(Number(event.target.value));
    }
    setIsExpanded(!!event.target.value);
  };

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
    <div
      className={`m-unitCard-container ${
        isExpanded ? "expanded" : "collapsed"
      }`}
    >
      <div className="m-unitCard-inputs">
        <div className="m-unitCard-container--coloredstripe"></div>
        <h2 className="m-unitCard-unitNumber">UNIT {unitNumber + 1}</h2>
        <TextField
          className="unit-card-input"
          fullWidth
          id="starting-shards"
          label="Starting Shards"
          onChange={handleChangeStartingShards}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          value={startingShards || ""}
        />
        <FormControl fullWidth>
          <FormLabel className="unit-availability" id="unit-availability">
            Unit Pool
          </FormLabel>
          <RadioGroup
            aria-labelledby="unit-availability"
            className="unit-availability"
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
      </div>

      {!!renderEstimatedDates && (
        <>
          <div className="m-unitCard-milestones">
            <h2>MILESTONES</h2>
            {MILESTONE_SHARDS.map((milestone, idx) => (
              <div key={idx}>
                <div
                  className={`m-unitCard-milestoneName sunset-${
                    unitNumber + 1
                  }`}
                >
                  <h3>{milestone.milestoneName}</h3>
                </div>
                <p>{estimatedTimeMessage(milestone.shardsNeeded)}</p>
                <h4>Estimated Date:</h4>
                <p>
                  {addHoursToDate(
                    currentDate,
                    hoursNeeded[milestone.milestoneKey]
                  ).toDateString()}
                </p>
              </div>
            ))}
          </div>
          <MilestoneCalendar
            currentDate={formatDatetoString(currentDate)}
            lastMilestoneDate={formatDatetoString(
              addHoursToDate(currentDate, hoursNeeded["level140"])
            )}
          />
        </>
      )}
    </div>
  );
};

export default UnitCard;

import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";
import CircularProgress from "@mui/material/CircularProgress";
import ConditionalWrapper from "../../../general/molecules/conditional-wrapper/conditionalWrapper";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import HelpIcon from "@mui/icons-material/Help";
import MilestoneCalendar from "../milestone-calendar/milestoneCalendar";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import UnitSearch from "../unit-search/unitSearch";
import useGetUnitByKey from "../../hooks/useGetUnitByKey";
import { ViewportContext } from "../../../general/context/viewPortProvider";

import "./unitCard.scss";
import HelperTitle from "../../../general/atoms/helper-title/helperTitle";

type ShardilisData = {
  [key in "green" | "blue" | "purple" | "yellow"]: number;
};

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

const SHARDILIS_HOUR_REDUCTION = {
  green: 1,
  blue: 2,
  purple: 8,
  yellow: 12,
};

const MILESTONE_HELPER_TEXT = (
  <span>
    Shards needed for each milestone.
    <br />
    Level 99 = 600 shards,
    <br />
    Level 120 = 1000 shards,
    <br />
    Level 140 = 1140 shards
  </span>
);
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

const calculateShardilisHoursSaved = (
  shardilisCount: ShardilisData,
  shardilisHourReduction: ShardilisData,
  currentDate: Date
) => {
  const {
    green: greenCount,
    blue: blueCount,
    purple: purpleCount,
    yellow: yellowCount,
  } = shardilisCount;
  const {
    green: greenReduction,
    blue: blueReduction,
    purple: purpleReduction,
    yellow: yellowReduction,
  } = shardilisHourReduction;

  const totalHoursSaved =
    greenCount * greenReduction +
    blueCount * blueReduction +
    purpleCount * purpleReduction +
    yellowCount * yellowReduction;

  // calculation of only one of each per day
  const daysElapsed = Math.floor(currentDate.getTime() / (24 * 60 * 60 * 1000));
  const adjustedHoursSaved = Math.min(totalHoursSaved, daysElapsed);

  return adjustedHoursSaved;
};

const calculateHoursNeeded = (
  startingShards: number,
  shardsPerHour: number,
  milestoneShards: MilestoneShards[],
  shardilisCount: ShardilisData,
  shardilisHourReduction: ShardilisData,
  currentDate: Date
): hoursNeededMilestone => {
  const hoursNeeded = milestoneShards.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.milestoneKey]:
        (cur.shardsNeeded - startingShards) / shardsPerHour -
        calculateShardilisHoursSaved(
          shardilisCount,
          shardilisHourReduction,
          currentDate
        ),
    }),
    {}
  );

  return hoursNeeded;
};
const currentDate = new Date();

function addHoursToDate(date: Date, hours: number) {
  const dateCopy = new Date(date);

  dateCopy.setTime(dateCopy.getTime() + hours * 60 * 60 * 1000);

  if (dateCopy < date) {
    return date;
  }

  return dateCopy;
}

const formatDatetoString = (date: Date) => date.toISOString().substring(0, 10);

const formatUnitElementToClassName = (unitElement: string) =>
  `wotv${unitElement.charAt(0).toUpperCase()}${unitElement.slice(1)}`;

const UnitCard = (props: unitCardProps) => {
  const { unitNumber } = props;
  const [unitAvailability, setUnitAvailability] = useState<string>("regular");
  const [startingShards, setStartingShards] = useState<number | null>(null);
  const [hoursNeeded, setHoursNeeded] = useState<hoursNeededMilestone | null>(
    null
  );
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [selectedUnitKey, setSelectedUnitKey] = useState<string>("");
  const [isSearchOpen, setSearchOpen] = useState<boolean>(false);
  const [shardilisCount, setShardilisCount] = useState<ShardilisData>({
    green: 0,
    blue: 0,
    purple: 0,
    yellow: 0,
  });
  const viewport = useContext(ViewportContext);

  const { isLoading, unit } = useGetUnitByKey(selectedUnitKey);

  const isMobile = viewport === "mobile";

  const shardilisKeys = Object.keys(shardilisCount) as Array<
    keyof ShardilisData
  >;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const renderEstimatedDates = startingShards && hoursNeeded;

  const shardsPerHour = useMemo(() => {
    const regular = 4 / 24;
    const limited = 2 / 24;

    return unitAvailability === "regular" ? regular : limited;
  }, [unitAvailability]);

  const displayHoursNeeded = useCallback(() => {
    if (startingShards) {
      setHoursNeeded(
        calculateHoursNeeded(
          startingShards,
          shardsPerHour,
          MILESTONE_SHARDS,
          shardilisCount,
          SHARDILIS_HOUR_REDUCTION,
          currentDate
        )
      );
    }
  }, [shardsPerHour, startingShards, shardilisCount]);

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
        }
        if (
          startingShards >= shardsNeeded ||
          hoursNeeded[selectedMilestone.milestoneKey] < 0
        ) {
          return `Congrats! can be reached already`;
        }

        return `Can be reached in ${Math.max(
          hoursNeeded[selectedMilestone.milestoneKey] / 24
        )} days`;
      }
    },
    [hoursNeeded, startingShards]
  );

  const getFetchedUnitAvailability = useCallback(() => {
    setUnitAvailability(unit?.limited ? "limited" : "regular");
  }, [unit]);

  const renderUnitNameImage = useCallback(() => {
    if (isLoading) {
      return (
        <div className="m-unitCard-unitImage--loading">
          <CircularProgress className="unitCard-loading" />
        </div>
      );
    }

    if (unit) {
      return (
        <div>
          <div className="m-unitCard-unitImage--container">
            <img alt="unit" src={unit?.image} />
          </div>
          <h2 className="m-unitCard-unitName unit">{unit?.name}</h2>
        </div>
      );
    }
    return (
      <h2 className="m-unitCard-unitName generic">UNIT {unitNumber + 1}</h2>
    );
  }, [isLoading, unit, unitNumber]);

  useEffect(() => displayHoursNeeded(), [displayHoursNeeded]);
  useEffect(() => getFetchedUnitAvailability(), [getFetchedUnitAvailability]);

  return (
    <div
      className={`m-unitCard-container ${
        isExpanded ? "expanded" : "collapsed"
      }`}
    >
      <div className="m-unitCard-inputs">
        <div className="m-unitCard-container--coloredstripe"></div>
        {renderUnitNameImage()}
        <TextField
          className="unit-card-input"
          fullWidth
          id="starting-shards"
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          label="Starting Shards"
          onChange={handleChangeStartingShards}
          size="small"
          type="number"
          value={startingShards || ""}
        />
        <div className="m-unitCard-searchCall">
          <p>Have a specific unit in mind?</p>
          <Button
            className={`unitCard-search ${
              unit?.element ? formatUnitElementToClassName(unit?.element) : ""
            }`}
            fullWidth
            onClick={() => setSearchOpen(true)}
            variant="contained"
          >
            Unit Search
          </Button>
        </div>
        <FormControl
          className="unitCard-inputsMobile"
          disabled={!!unit ?? false}
          fullWidth
        >
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
        <FormControl className="unitCard-inputsMobile" fullWidth>
          <FormLabel className="unit-availability" id="unit-availability">
            Shardilis
          </FormLabel>
          <div className="m-unitCard-shardilisInputGroup">
            {shardilisKeys.map((shardilis) => (
              <div
                className="m-unitCard-shardilisInputGroup--shardilisInput"
                key={shardilis}
              >
                <CircleIcon
                  className={`shardilis-icon shardilis-${shardilis}`}
                />
                <TextField
                  className="unit-card-input shardilis-input"
                  id={`shardilis-${shardilis}`}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  onChange={(e) =>
                    setShardilisCount({
                      ...shardilisCount,
                      [shardilis]: e.target.value,
                    })
                  }
                  size="small"
                  type="number"
                  value={shardilisCount[shardilis]}
                />
              </div>
            ))}
          </div>
        </FormControl>
      </div>

      {!!renderEstimatedDates && (
        <>
          {isMobile && (
            <Tabs
              className="unit-card-tabs"
              value={activeTab}
              onChange={handleTabChange}
            >
              <Tab label="Milestones" />
              <Tab label="Calendar" />
            </Tabs>
          )}
          <>
            <ConditionalWrapper
              condition={isMobile}
              wrapper={(children: any) => (
                <div className="m-unitCard-tabsContainer">{children}</div>
              )}
            >
              <ConditionalWrapper
                condition={isMobile}
                wrapper={(children: any) => (
                  <div className={`${activeTab === 1 ? "hidden" : ""}`}>
                    {children}
                  </div>
                )}
              >
                <div className="m-unitCard-milestones">
                  {!isMobile && (
                    <HelperTitle
                      title="MILESTONES"
                      tooltipArrow
                      tooltipPlacement="right"
                      tooltipTitle={MILESTONE_HELPER_TEXT}
                      children={<HelpIcon />}
                    />
                  )}
                  {MILESTONE_SHARDS.map((milestone, idx) => (
                    <div key={idx}>
                      <div className="m-unitCard-milestoneName">
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
              </ConditionalWrapper>
              <ConditionalWrapper
                condition={isMobile}
                wrapper={(children: any) => (
                  <div className={`${activeTab === 0 ? "hidden" : ""}`}>
                    {children}
                  </div>
                )}
              >
                {isMobile && (
                  <p className="m-unitCard-calendarDescription">
                    Date range between today and when the last milestone will be
                    achieved.
                  </p>
                )}
                <MilestoneCalendar
                  currentDate={formatDatetoString(currentDate)}
                  lastMilestoneDate={formatDatetoString(
                    addHoursToDate(currentDate, hoursNeeded["level140"])
                  )}
                />
              </ConditionalWrapper>
            </ConditionalWrapper>
          </>
        </>
      )}
      <UnitSearch
        isSearchOpen={isSearchOpen}
        setSearchOpen={setSearchOpen}
        selectedUnitKey={selectedUnitKey}
        setSelectedUnitKey={setSelectedUnitKey}
      />
    </div>
  );
};

export default UnitCard;

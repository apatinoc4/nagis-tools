import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import Button from "@mui/material/Button";
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
  const viewport = useContext(ViewportContext);

  const { isLoading, unit } = useGetUnitByKey(selectedUnitKey);

  const isMobile = viewport === "mobile";

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
        <FormControl disabled={!!unit ?? false} fullWidth>
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

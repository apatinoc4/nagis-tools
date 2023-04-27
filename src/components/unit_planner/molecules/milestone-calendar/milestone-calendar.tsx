import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

interface MilestoneCalendarProps {
  currentDate: string;
  lastMilestoneDate: string;
}

const MilestoneCalendar = (props: MilestoneCalendarProps) => {
  const { currentDate, lastMilestoneDate } = props;

  return <Calendar className="test" value={[currentDate, lastMilestoneDate]} />;
};

export default MilestoneCalendar;

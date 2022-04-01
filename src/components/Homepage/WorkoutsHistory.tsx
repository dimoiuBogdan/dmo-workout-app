import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import "./Homepage.css";
import WorkoutSummaryList from "./WorkoutSummaryList";

const HomepageSummary = () => {
  const TIMESPANS = [
    { timespan: "1 Week" },
    { timespan: "2 Weeks" },
    { timespan: "3 Weeks" },
    { timespan: "1 Month" },
  ];
  const [summaryTimespan, setSummaryTimespan] = useState(TIMESPANS[0]);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>Weeky Workout Summary</div>
        <Dropdown
          className="timespan-dropdown"
          optionLabel="timespan"
          value={summaryTimespan}
          options={TIMESPANS}
          onChange={(e) => setSummaryTimespan(e.value)}
        />
      </div>
      <WorkoutSummaryList />
    </div>
  );
};

export default HomepageSummary;

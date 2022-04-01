import { FC } from "react";
import { handleDate } from "../../utils/helperMethods";

const WorkoutSummaryList = () => {
  const WORKOUTS = [
    {
      workout: "Back & Biceps",
      date: new Date(),
    },
    {
      workout: "Chest & Triceps",
      date: new Date(),
    },
    {
      workout: "Legs",
      date: new Date(),
    },
    {
      workout: "Back & Biceps",
      date: new Date(),
    },
    {
      workout: "Back & Biceps",
      date: new Date(),
    },
    {
      workout: "Back & Biceps",
      date: new Date(),
    },
  ];

  const WorkoutSummaryCard: FC<{ workout: string; date: Date }> = ({
    workout,
    date,
  }) => {
    return (
      <div className="mr-3 min-w-[120px] relative bg-slate-700 p-2 rounded-md shadow-md text-center">
        <i className="fa-solid fa-ellipsis right-2 top-0 absolute text-xl"></i>
        <i className="fa-solid fa-dumbbell text-transparent text-slate-600 p-1 rounded-full bg-gradient-to-b from-slate-200 to-slate-400 text-2xl mb-1 shadow-md"></i>
        <div className="text-sm font-medium text-ellipsis overflow-hidden whitespace-nowrap">
          {workout}
        </div>
        <div className="text-xs">{handleDate(date)}</div>
      </div>
    );
  };

  return (
    <div className="mb-4 flex overflow-x-scroll">
      {WORKOUTS.map((workout, index) => (
        <WorkoutSummaryCard
          key={index}
          date={workout.date}
          workout={workout.workout}
        />
      ))}
    </div>
  );
};

export default WorkoutSummaryList;

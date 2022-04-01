import { FC } from "react";
import { handleDate } from "../../utils/helperMethods";

type Exercises = {
  exercise: string;
  sets: string | number;
  reps: string[] | number[];
  weight: string[] | number[];
};

export type WorkoutDetailsCardProps = {
  workout: string;
  date: Date;
  exercises: Exercises[];
};

const WorkoutDetailsCard: FC<WorkoutDetailsCardProps> = ({
  workout,
  date,
  exercises,
}) => {
  return (
    <div className="w-full p-2 shadow-md bg-slate-700 border-2 border-slate-400 rounded-md my-6">
      <div className="flex font-medium items-center justify-between pb-3 mb-2 border-b-2 15/12/10/8border-slate-500">
        <div>{workout}</div>
        <div>{date ? handleDate(date) : "-"}</div>
      </div>
      <div className="flex">
        <div className="w-1/5 pr-2 text-slate-300 py-2">
          <div>Exercise</div>
          <div>Sets</div>
          <div>Reps</div>
          <div>Weight</div>
        </div>
        <div className="w-4/5 flex overflow-x-scroll py-2 bg-slate-800 bg-opacity-60 shadow-inner shadow-slate-700 rounded-sm ">
          {exercises.map((exercise) => {
            return (
              <div
                className="text-center flex-1 min-w-max px-2 border-r-2 border-slate-500"
                key={exercise.exercise}
              >
                <div>{exercise.exercise}</div>
                <div>{exercise.sets}</div>
                <div>
                  {exercise.reps.map((rep, index) => {
                    const isLast = index === exercise.reps.length - 1;
                    return (
                      <span key={index}>
                        {rep}
                        {isLast ? "" : "/"}
                      </span>
                    );
                  })}
                </div>
                <div>
                  {exercise.weight.map((rep, index) => {
                    const isLast = index === exercise.weight.length - 1;
                    return (
                      <span key={index}>
                        {rep}
                        {isLast ? "" : "/"}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetailsCard;

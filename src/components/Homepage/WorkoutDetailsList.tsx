import { DUMMY_WORKOUTS_DETAILS } from "../../utils/constants";
import WorkoutDetailsCard from "./WorkoutDetailsCard";

const HomepageWorkoutDetails = () => {
  return (
    <div>
      {DUMMY_WORKOUTS_DETAILS.map((workout, index) => {
        return (
          <WorkoutDetailsCard
            key={index}
            date={workout.date}
            workout={workout.workout}
            exercises={workout.exercises}
          />
        );
      })}
    </div>
  );
};

export default HomepageWorkoutDetails;

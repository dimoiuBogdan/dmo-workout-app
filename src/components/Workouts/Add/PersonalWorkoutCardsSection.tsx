import { DUMMY_PERSONAL_WORKOUTS } from "../../../utils/constants";
import PersonalWorkoutCard from "../Personal/PersonalWorkoutCard";

const PersonalWorkoutCardsSection = () => {
  const SORTED_DUMMY_PERSONAL_WORKOUTS = DUMMY_PERSONAL_WORKOUTS.sort(
    (w1, w2) => {
      return w1.performedNumber - w2.performedNumber;
    }
  );

  return (
    <div>
      {SORTED_DUMMY_PERSONAL_WORKOUTS.map((workout) => {
        const { title, exercises, performedNumber } = workout;

        return (
          <PersonalWorkoutCard
            title={title}
            exercises={exercises}
            performedNumber={performedNumber}
          />
        );
      })}
    </div>
  );
};

export default PersonalWorkoutCardsSection;

import AddWorkoutButtons from "./AddWorkoutButtons";
import PersonalWorkoutCardsSection from "./PersonalWorkoutCardsSection";

const PersonalWorkouts = () => {
  return (
    <div>
      <div className="text-xl mb-2">Personal Workouts</div>
      <AddWorkoutButtons />
      <PersonalWorkoutCardsSection />
    </div>
  );
};

export default PersonalWorkouts;

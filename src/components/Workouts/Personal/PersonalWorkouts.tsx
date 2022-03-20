import AddWorkoutButtons from "../Add/AddWorkoutButtons";
import PersonalWorkoutCardsSection from "../Add/PersonalWorkoutCardsSection";

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

import PageHeader from "../PageHeader/PageHeader";
import PersonalWorkouts from "./PersonalWorkouts";
import QuickAdd from "./QuickAdd";

const Workouts = () => {
  return (
    <div>
      <PageHeader pageTitle="Workouts" />
      <QuickAdd />
      <PersonalWorkouts />
    </div>
  );
};

export default Workouts;

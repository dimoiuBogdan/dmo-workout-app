import PageHeader from "../common/PageHeader";
import PersonalWorkouts from "./Personal/PersonalWorkouts";
import QuickAdd from "./Add/QuickAdd";

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

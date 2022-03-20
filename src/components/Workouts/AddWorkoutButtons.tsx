import AddWorkout from "./AddWorkout";

const AddWorkoutButtons = () => {
  return (
    <div className="flex justify-around items-center mb-6">
      <AddWorkout icon="folder-plus" title="Add New" />
      <AddWorkout icon="cubes" title="Try Ours" />
    </div>
  );
};

export default AddWorkoutButtons;

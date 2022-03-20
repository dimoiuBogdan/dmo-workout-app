import { FC } from "react";

type AddWorkoutProps = {
  title: string;
  icon: string;
};

const AddWorkout: FC<AddWorkoutProps> = ({ title, icon }) => {
  return (
    <div className="shadow-md w-2/5 py-3 border-2 flex items-center justify-center">
      <i className={`fa-solid fa-${icon} text-xl mr-2 text-yellow-400`}></i>
      <div className="text-xl">{title}</div>
    </div>
  );
};

export default AddWorkout;

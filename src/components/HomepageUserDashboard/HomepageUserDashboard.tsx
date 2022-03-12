import { FC } from "react";

type HomepageUserDashboardProps = {
  name: string;
  profileImage: string;
  workoutsSoFar: number;
};

const HomepageUserDashboard: FC<Partial<HomepageUserDashboardProps>> = ({
  name,
  profileImage,
  workoutsSoFar,
}) => {
  return (
    <div className="flex items-center mb-4">
      <img
        className="mr-3 rounded-full w-20 h-20 object-cover object-center"
        src="https://avatars.githubusercontent.com/u/27856891?v=4"
        alt="user-profile"
      />
      <div>
        <div className="font-medium text-xl">Bogdan Dimoiu</div>
        <div>
          <span className="font-medium">412</span> workouts
        </div>
      </div>
    </div>
  );
};

export default HomepageUserDashboard;

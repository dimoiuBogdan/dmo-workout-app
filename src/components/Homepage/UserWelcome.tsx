import { FC } from "react";

type HomepageHeaderProps = {
  name: string;
  image: string;
};

const HomepageHeader: FC<HomepageHeaderProps> = ({ name, image }) => {
  return (
    <div className="flex justify-between mb-2">
      <div className="text-xl">
        Welcome, <br /> <span className="font-medium">{name}</span>
      </div>
      <img
        className="w-12 h-12 rounded-full border-2 border-slate-400 object-cover object-center"
        src={image}
        alt="profile-user"
      />
    </div>
  );
};

export default HomepageHeader;

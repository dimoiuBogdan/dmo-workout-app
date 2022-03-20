import { FC } from "react";
import { NavLink } from "react-router-dom";

type FooterItemProps = {
  title: string;
  icon: string;
  pageUrl: string;
};

const FooterItem: FC<FooterItemProps> = ({ title, icon, pageUrl }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-yellow-600 bg-opacity-20 text-center flex-1 py-1"
          : "text-center flex-1 py-1"
      }
      to={pageUrl}
    >
      <i className={`text-xl fa-solid fa-${icon}`}></i>
      <div>{title}</div>
    </NavLink>
  );
};

const Footer = () => {
  return (
    <div className="flex max-w-screen-md mx-auto justify-between fixed bottom-0 w-screen left-0 right-0 bg-slate-200 text-sm font-medium shadow-md bg-opacity-80 backdrop-blur-sm">
      <FooterItem title="Home" icon="house" pageUrl="/" />
      <FooterItem title="Workouts" icon="dumbbell" pageUrl="/workouts" />
      <FooterItem title="Profile" icon="user" pageUrl="/profile" />
    </div>
  );
};

export default Footer;

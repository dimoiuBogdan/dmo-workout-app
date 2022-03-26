import { FC } from "react";
import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

type AuthFormProps = {
  template: "login" | "register";
};

const AuthForm: FC<AuthFormProps> = ({ template }) => {
  return (
    <div className="bg-slate-700 rounded-md shadow-lg bg-opacity-70 backdrop-blur-sm px-3 py-4 w-full">
      <div className="flex items-center justify-around mb-3 text-xl uppercase border-b-2 border-slate-500 pb-2">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "font-medium" : "text-slate-400"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "font-medium" : "text-slate-400"
          }
        >
          Register
        </NavLink>
      </div>
      <div>{template === "login" ? <LoginForm /> : <RegisterForm />}</div>
    </div>
  );
};

export default AuthForm;

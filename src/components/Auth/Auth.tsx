import { FC } from "react";
import AuthForm from "./AuthForm";

type AuthProps = {
  template: "login" | "register";
};

const Auth: FC<AuthProps> = ({ template }) => {
  const isLoginPage = template === "login";

  return (
    <div className="flex flex-col items-center">
      <div className="py-10 text-3xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-slate-300 to-slate-600">
        DMO WORKOUT
      </div>
      <AuthForm template={isLoginPage ? "login" : "register"} />
    </div>
  );
};

export default Auth;

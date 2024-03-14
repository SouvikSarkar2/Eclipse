import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { redirect } from "react-router-dom";

const Landing = () => {
  const { login, register, isAuthenticated } = useKindeAuth();

  if (isAuthenticated) {
    redirect("/dashboard");
  }

  return (
    <div className="flex gap-2 p-2">
      <button
        onClick={register}
        className="bg-sky-400 rounded-md p-2"
        type="button"
      >
        Sign up
      </button>
      <button
        onClick={login}
        className="bg-sky-400 rounded-md p-2"
        type="button"
      >
        Sign In
      </button>
    </div>
  );
};

export default Landing;

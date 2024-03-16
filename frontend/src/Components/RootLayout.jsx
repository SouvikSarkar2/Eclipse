import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  const { user, isAuthenticated, isLoading, logout } = useKindeAuth();
  if (isLoading) {
    return <p>Loading</p>;
  }
  if (!isAuthenticated) {
    return <div>ACCESS DENIED</div>;
  }
  console.log(user);
  return (
    <div className="w-[100vw] h-[100vh] relative">
      <div className="h-[12%] w-full bg-sky-400 flex justify-between">
        <div className="flex p-2 gap-2">
          {" "}
          <Link to={"/root/music/home"}>Music</Link>
          <Link to={"/root/video"}>Video</Link>
        </div>
        <div>Hi {user.given_name}!</div>
        <div className="">
          <button
            onClick={() => logout()}
            className="bg-black p-2 font-bold rounded-md text-sm text-white"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="h-[88%] w-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;

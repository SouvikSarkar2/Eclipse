import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { redirect } from "react-router-dom";

const Landing = () => {
  const { login, register, isAuthenticated } = useKindeAuth();

  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-purple-200">
      <div className="absolute h-full w-full overflow-hidden">
        <div className="absolute left-[5%] top-[40%] w-[750px] rounded-full blur-[200px] h-[900px]  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>
        <div className="absolute left-[45%] top-[15%] w-[750px] rounded-full blur-[200px] h-[900px]  bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"></div>
      </div>
      <div className="flex justify-between w-[90%] h-[15%] items-center ">
        <div className="font-[Urbanist] text-3xl font-bold">Eclipse</div>

        <button
          onClick={login}
          className="z-10 rounded-md px-4 py-2 border-[1px] font-bold text-lg uppercase border-black duration-500 hover:bg-gradient-to-l hover:bg-red-500 hover:text-white"
          type="button"
        >
          {isAuthenticated ? "Dashboard" : "Login"}
        </button>
      </div>
      <div className="w-[88%] flex flex-col justify-start  h-[85%] pt-10 ">
        <div className="font-[Oswald] flex flex-col gap-4 font-bold text-8xl z-10 text-landing bg-red-700 text-transparent bg-clip-text">
          <div>Your Personal </div>
          <div>Music & Video</div>
          <div>Streaming Platform</div>
        </div>
        <div className="flex h-[35%] justify-end items-end z-10 font-semibold">
          <div className="flex justify-center items-center p-2">
            Dont Have an Account!{" "}
          </div>
          <div>
            {" "}
            <button
              onClick={register}
              className="border-black p-2 text-xl uppercase italic"
              type="button"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

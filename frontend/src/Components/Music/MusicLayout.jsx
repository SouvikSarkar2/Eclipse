import { Link, Outlet } from "react-router-dom";
import Aside from "./Aside";
import { Home, DiscAlbum, AudioLines,Drum,User } from "lucide-react";

const Music = () => {
  return (
    <div className="h-full w-full  flex">
      <div className="w-[13%] h-full flex flex-col shadow-lg pl-[3%] justify-start items-start gap-2 p-2 ">
        <Link
          className=" flex items-center transition-transform transform  hover:translate-x-2"
          to={"/root/music/home"}
        >
          <Home className="mr-2 mt-[1rem]" size={20} />
          <span className="mr-2 mt-[1rem] font-semibold text-gray-400 hover:text-gray-700">Home</span>
        </Link>
        <Link
          className=" flex items-center transition-transform transform hover:translate-x-2"
          to={"/root/music/album"}
        >
          <DiscAlbum className="mr-2 mt-[2rem]" size={20} />
          <span className="mr-2 mt-[2rem] font- text-gray-400 hover:text-gray-700">Album</span>
        </Link>
        <Link
          className=" flex items-center transition-transform transform hover:translate-x-2"
          to={"/root/music/track"}
        >
          <AudioLines className="mr-2 mt-[2rem]" size={20} />
          <span className="mr-2 mt-[2rem] font- text-gray-400 hover:text-gray-700">Track</span>
        </Link>
        <Link
          className=" flex items-center transition-transform transform hover:translate-x-2"
          to={"/root/music/genre"}
        >
          <Drum className="mr-2 mt-[2rem]" size={20} />
          <span className="mr-2 mt-[2rem] font- text-gray-400 hover:text-gray-700">Genre</span>
        </Link>
        <Link
          className=" flex items-center transition-transform transform hover:translate-x-2"
          to={"/root/music/artist"}
        >
          <User className="mr-2 mt-[2rem]" size={20} />
          <span className="mr-2 mt-[2rem] font- text-gray-400 hover:text-gray-700">Artist</span>
        </Link>
      </div>
      <div className="w-[70%] h-full">
        <Outlet />
      </div>
      <div className=" relative w-[17%] h-full bg-amber-300">
        <Aside />
      </div>
    </div>
  );
};

export default Music;

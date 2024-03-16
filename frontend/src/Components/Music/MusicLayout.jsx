import { Link, Outlet } from "react-router-dom";
import Aside from "./Aside";

const Music = () => {
  return (
    <div className="h-full w-full  flex">
      <div className="w-[15%] h-full bg-yellow-300 flex flex-col justify-start gap-2 p-2">
        <Link to={"/root/music/home"}>Home</Link>
        <Link to={"/root/music/album"}>Album</Link>
        <Link to={"/root/music/track"}>Track</Link>
        <Link to={"/root/music/genre"}>Genre</Link>
        <Link to={"/root/music/artist"}>Artist</Link>
      </div>
      <div className="w-[68%] h-full bg-slate-300">
        <Outlet />
      </div>
      <div className="w-[17%] h-full bg-amber-300">
        <Aside />
      </div>
    </div>
  );
};

export default Music;

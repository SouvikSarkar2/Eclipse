import React from "react";

const AlbumCard = ({ picURL, PlaylistName }) => {
  return (
    <div className=" flex flex-col text-center">
      <div className="h-[10rem] w-[10rem] bg-gray-400 rounded-xl shadow-md">
        {/* picture */}
      </div>
      <span>name</span>
      <span>Artist</span>
    </div>
  );
};

export default AlbumCard;

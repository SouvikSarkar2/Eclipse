import AlbumCard from "./AlbumCard";

const Album = () => {
  return (
    <section className="m-3">
      <div className="flex justify-center items-center my-3 ">
        <div className="h-[24rem] w-[85%] bg-coral-red shadow-lg rounded-3xl"></div>
      </div>
      <div className=" w-auto h-auto  flex justify-center items-center  rounded-md m-5">
        <div className=" grid bg-gradient-to-t grid-cols-4 gap-10 items-center p-6">
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </div>
      </div>
    </section>
  );
};

export default Album;

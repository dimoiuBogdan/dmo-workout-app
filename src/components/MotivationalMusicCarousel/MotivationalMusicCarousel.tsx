import { Carousel } from "primereact/carousel";

const itemTemplate = () => {
  return (
    <div className="text-center mx-1.5 shadow-sm rounded-md overflow-hidden">
      <img
        className="h-32 w-full object-cover object-center"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages-sg.girlstyle.com%2Fwp-content%2Fuploads%2F2020%2F05%2FSpotify.jpg&f=1&nofb=1"
        alt="album-cover"
      />
      <div className="pt-2 bg-gradient-to-br from-zinc-200 to-slate-300 pb-2">
        <div className="text-slate-800 font-medium">Song Name</div>
        <div className="text-sm">Playlist</div>
      </div>
    </div>
  );
};

const MotivationalMusicCarousel = () => {
  return (
    <div className="mb-6">
      <div className="text-xl mb-2">Workout Music</div>
      <Carousel
        value={[1, 2, 3, 4, 5, 6]}
        itemTemplate={itemTemplate}
        numScroll={3}
        numVisible={3}
      ></Carousel>
    </div>
  );
};

export default MotivationalMusicCarousel;

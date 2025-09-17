import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <CurrentlyPlaying/>
      <div className="w-full h-1 md:w-1 md:h-auto bg-slate-50 "></div>
      <Playlist/>
    </div>
  );
}

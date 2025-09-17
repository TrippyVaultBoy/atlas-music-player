import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row border-2 border-offwhite rounded-2xl bg-blue text-offwhite">
      <CurrentlyPlaying/>
      <Playlist/>
    </div>
  );
}

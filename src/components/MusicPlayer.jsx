import CurrentlyPlaying from "./CurrentlyPlaying/CurrentlyPlaying";
import Playlist from "./Playlist/Playlist.tsx";
import AudioPlayer from "./AudioPlayer.tsx";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col md:flex-row border-2 border-blue dark:border-offwhite rounded-2xl bg-offwhite dark:bg-blue text-blue dark:text-offwhite">
      <CurrentlyPlaying/>
      <Playlist/>
      <AudioPlayer/>
    </div>
  );
}

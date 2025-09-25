import PlayListItem from "./PlayListItem.tsx";
import { useMusicPlayer } from "../MusicPlayerContext";

function formatDuration(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`
}

function Playlist() {
    const { playlist } = useMusicPlayer();

    return (
        <div className="flex flex-col flex-1 gap-3 px-7 pt-7 pb-3 md:p-7">
            <p className="font-inter font-bold text-lg">Playlist</p>
            <div className="flex flex-col gap-2">
                {playlist.map((track) => (
                    <PlayListItem key={track.id} title={track.title} artist={track.artist} duration={formatDuration(track.duration)} id={track.id}/>
                ))}
            </div>
        </div>
    );
}

export default Playlist;
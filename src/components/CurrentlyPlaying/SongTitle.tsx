import { JSX } from "react";
import { useMusicPlayer } from "../MusicPlayerContext";

function SongTitle(): JSX.Element {
    const { currentTrack } = useMusicPlayer();
   
    if (!currentTrack) {
        return (
        <div className="flex flex-col gap-1">
            <p className="font-inter font-bold text-2xl">Loading...</p>
            <p className="font-inter font-normal text-base text-red dark:text-teal"> </p>
        </div>
        );
    }

    return (
        <div className="flex flex-col gap-1">
            <p className="font-inter font-bold text-2xl">{currentTrack.title}</p>
            <p className="font-inter font-normal text-base text-red dark:text-teal">{currentTrack.artist}</p>
        </div>
    );
}

export default SongTitle;
import { JSX } from "react";
import placeholder from "/root/atlas-music-player-3/src/assets/placeholder.svg";
import { useMusicPlayer } from "../MusicPlayerContext";

function CoverArt(): JSX.Element {
    const { currentTrack } = useMusicPlayer()
   
    if (!currentTrack) return <img src={placeholder} alt="Loading..." />;

    return (
        <img
            src={currentTrack.cover}
            alt="album art placeholder"
        />
    )
}

export default CoverArt;
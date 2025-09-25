import CoverArt from "./CoverArt.tsx";
import SongTitle from "./SongTitle.tsx";
import PlayControls from "./PlayControls.tsx";
import VolumeControls from "./VolumeControls.tsx";
import { JSX } from "react";

function CurrentlyPlaying(): JSX.Element {
    return (
        <div className="flex flex-col flex-1 gap-4 p-7 sm:border-b-2 md:border-r-2 md:border-b-0 border-blue dark:border-offwhite">
            <CoverArt/>
            <SongTitle/>
            <PlayControls/>
            <VolumeControls/>
        </div>
    );
}

export default CurrentlyPlaying;
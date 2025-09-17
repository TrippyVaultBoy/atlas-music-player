import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

function CurrentlyPlaying() {
    return (
        <div className="flex flex-col flex-1 gap-4 p-7 sm:border-b-2 md:border-r-2 md:border-b-0 border-offwhite">
            <CoverArt/>
            <SongTitle/>
            <PlayControls/>
            <VolumeControls/>
        </div>
    );
}

export default CurrentlyPlaying;
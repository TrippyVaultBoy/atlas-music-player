import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

function CurrentlyPlaying() {
    return (
        <div className="flex flex-col  flex-1 gap-4 p-3 mb-2">
            <CoverArt/>
            <SongTitle/>
            <PlayControls/>
            <VolumeControls/>
        </div>
    );
}

export default CurrentlyPlaying;
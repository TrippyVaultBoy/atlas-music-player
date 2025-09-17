import { SkipBack, Play, SkipForward, Shuffle } from "lucide-react";

function PlayControls() {
    return (
        <div className="flex items-center justify-between">
            <p className="font-inter font-normal text-lg hover:text-red">1x</p>
            <SkipBack className="hover:text-red" width="24px" height="24px"/>
            <Play className="hover:text-red" width="48px" height="48px"/>
            <SkipForward className="hover:text-red" width="24px" height="24px"/>
            <Shuffle className="hover:text-red" width="24px" height="24px"/>
        </div>
    );
}

export default PlayControls;
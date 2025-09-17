import { SkipBack, SquarePlay, SkipForward, Shuffle } from "lucide-react";

function PlayControls() {
    return (
        <div className="flex items-center justify-between">
            <p className="font-inter font-normal text-lg">1x</p>
            <SkipBack width="24px" height="24px"/>
            <SquarePlay width="48px" height="48px"/>
            <SkipForward width="24px" height="24px"/>
            <Shuffle width="24px" height="24px"/>
        </div>
    );
}

export default PlayControls;
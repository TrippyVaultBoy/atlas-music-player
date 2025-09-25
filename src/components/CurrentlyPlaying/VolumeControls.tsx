import { Volume2 } from "lucide-react";
import { JSX } from "react";
import { useMusicPlayer } from "../MusicPlayerContext";

function VolumeControls(): JSX.Element {
    const { volume, setVolume } = useMusicPlayer()
    
    function handleVolume(e: React.ChangeEvent<HTMLInputElement>) {
        const value = Number(e.target.value);
        setVolume(value);
    }

    return (
        <div className="flex items-center">
            <Volume2 className="mr-3"/>
            <input
                type="range"
                className="w-full h-4 accent-red"
                value={volume}
                onChange={handleVolume}
                min="0"
                max="100"
            />
        </div>
    );
}

export default VolumeControls;
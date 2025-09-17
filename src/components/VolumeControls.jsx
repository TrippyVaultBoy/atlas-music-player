import { Volume2 } from "lucide-react";

function VolumeControls() {
    return (
        <div className="flex items-center">
            <Volume2 className="mr-2"/>
            <input
                type="range"
                className="w-96 h-4 accent-red"
                min="0"
                max="100"
            />
        </div>
    );
}

export default VolumeControls;
import { Volume2 } from "lucide-react";

function VolumeControls() {
    return (
        <div className="flex items-center">
            <Volume2/>
            <input
                type="range"
                className="w-96 h-4 accent-slate-500"
                min="0"
                max="100"
            />
        </div>
    );
}

export default VolumeControls;
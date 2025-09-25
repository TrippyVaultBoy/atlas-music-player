import { SkipBack, Play, Pause, SkipForward, Shuffle } from "lucide-react";
import { JSX } from "react";
import { useMusicPlayer } from "../MusicPlayerContext";

function PlayControls(): JSX.Element {
    const { currentTrack, fetchTrack, playbackSpeed, playlist, shuffledPlaylist, setShuffledPlaylist, setPlaybackSpeed, isPlaying, setIsPlaying, shuffle, setShuffle } = useMusicPlayer();
    const playbackSpeeds = [0.5, 1, 2];

    const list = shuffle ? shuffledPlaylist : playlist;
    const currentIndex = list.findIndex(track => track.id === currentTrack?.id);
    
    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = (currentIndex === playlist.length - 1);

    function togglePlaybackSpeed() {
        const currentIndex = playbackSpeeds.indexOf(playbackSpeed);
        const nextIndex = (currentIndex + 1) % playbackSpeeds.length;
        setPlaybackSpeed(playbackSpeeds[nextIndex]);
    }

    function toggleIsPlaying() {
        setIsPlaying((prev: boolean) => !prev);
    }
    
    function toggleShuffle() {
        setShuffle(prev => {
            const newShuffle = !prev;

            if (newShuffle) {
                const shuffled = [...playlist].sort(() => Math.random() - 0.5);
                setShuffledPlaylist(shuffled);
            }
            return newShuffle;
        });
    }

    function toggleNext() {
        const list = shuffle ? shuffledPlaylist : playlist;
        if (!currentTrack || list.length === 0) return;

        const currentIndex = list.findIndex(track => track.id === currentTrack.id);

        const nextIndex = (currentIndex + 1) % list.length;
        fetchTrack(list[nextIndex].id);
    }

    function togglePrevious() {
        const list = shuffle ? shuffledPlaylist : playlist;
        if (!currentTrack || list.length === 0) return;

        const currentIndex = list.findIndex(track => track.id === currentTrack.id);

        const prevIndex = (currentIndex - 1 + list.length) % list.length;
        fetchTrack(list[prevIndex].id);
    }

    return (
        <div className="flex items-center justify-between">
            <p onClick={togglePlaybackSpeed} className="font-inter font-normal text-lg hover:text-red">{playbackSpeed}x</p>
            <SkipBack
                onClick={() => {
                    if (!isPrevDisabled) togglePrevious();
                }} 
                className={`${ isPrevDisabled ? "text-gray-500" : "hover:text-red"} width="24px" height="24px"`}
            />
            {isPlaying ? <Pause onClick={toggleIsPlaying} className="hover:text-red" width="48px" height="48px"/> : <Play onClick={toggleIsPlaying} className="hover:text-red" width="48px" height="48px"/>}
            <SkipForward 
                onClick={() => {
                    if (!isNextDisabled) toggleNext();
                }}
                className={`${ isNextDisabled ? "text-gray-500" : "hover:text-red"} width="24px" height="24px"`}
            />
            <Shuffle onClick={toggleShuffle} className={`hover:text-red ${shuffle ? "text-red" : ""}`} width="24px" height="24px"/>
        </div>
    );
}

export default PlayControls;
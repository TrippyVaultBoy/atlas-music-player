import { useMusicPlayer } from "./MusicPlayerContext";
import { useEffect, useRef } from "react"

function AudioPlayer() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const { currentTrack, fetchTrack, playlist, shuffledPlaylist, isPlaying, volume, playbackSpeed, shuffle } = useMusicPlayer();
   
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying, currentTrack]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.volume = volume / 100;
    }, [volume]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.playbackRate = playbackSpeed;
    }, [playbackSpeed]);

    function handleEnded() {
        const list = shuffle ? shuffledPlaylist : playlist;
        if (!currentTrack || list.length === 0) return;

        const currentIndex = list.findIndex(track => track.id === currentTrack.id);

        const nextIndex = (currentIndex + 1) % list.length;
        fetchTrack(list[nextIndex].id);
    }

    if (!currentTrack) return null;

    return (
        <audio ref={audioRef} src={currentTrack.song} onEnded={handleEnded} preload="metadata"/>
    );
}

export default AudioPlayer;
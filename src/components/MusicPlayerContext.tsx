import {createContext, useContext, useEffect, useState, Dispatch, SetStateAction } from "react";

type Track = {
    id: string
    cover: string;
    title: string;
    artist: string;
    duration: number;
    song: string;
}

type MusicPlayerContextType = {
    currentTrack: Track | null;
    setCurrentTrack: Dispatch<SetStateAction<Track | null>>; 
    isPlaying: boolean;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    playlist: Track[];
    shuffledPlaylist: Track[];
    setShuffledPlaylist: Dispatch<SetStateAction<Track[]>>
    fetchTrack: (id: string) => Promise<void>;
    playbackSpeed: number;
    setPlaybackSpeed: (speed: number) => void;
    shuffle: boolean;
    setShuffle: Dispatch<SetStateAction<boolean>>;
    volume: number;
    setVolume: Dispatch<SetStateAction<number>>;
}

const MusicPlayerContext = createContext<MusicPlayerContextType | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: React.ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [playlist, setPlaylist] = useState<Track[]>([]);
    const [shuffledPlaylist, setShuffledPlaylist] = useState<Track[]>([]);
    const [playbackSpeed, setPlaybackSpeed] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [volume, setVolume] = useState(0.5);

    const fetchTrack = async (id: string) => {
        try {
            const res = await fetch(`http://localhost:5173/api/v1/songs/${id}`);
            const data: Track = await res.json();
            setCurrentTrack(data);
        } catch (err) {
            console.error("Failed to fetch track: ", err);
        }
    };

    useEffect(() => {
        async function fetchPlaylist() {
            try {
                const res = await fetch("http://localhost:5173/api/v1/playlist");
                const data: Track[] = await res.json();
                setPlaylist(data);
                if (data.length > 0) {
                    await fetchTrack(data[0].id);
                }
            } catch (err) {
                console.error("Failed to fetch playlist: ", err);
            }
        }

        fetchPlaylist();
    }, []);

    return (
        <MusicPlayerContext.Provider
            value={{
                currentTrack,
                setCurrentTrack,
                playlist,
                shuffledPlaylist,
                setShuffledPlaylist,
                fetchTrack,
                playbackSpeed,
                setPlaybackSpeed,
                isPlaying,
                setIsPlaying,
                shuffle,
                setShuffle,
                volume,
                setVolume,
            }}
        >
            {children}
        </MusicPlayerContext.Provider>
    )
}

export function useMusicPlayer() {
    const context = useContext(MusicPlayerContext);
    if (!context) {
        throw new Error("useMusicPlayer must be used within MusicPlayerProvider");
    }
    return context;
}
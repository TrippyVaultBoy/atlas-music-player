import { useMusicPlayer } from "../MusicPlayerContext";

type PlaylistItemProps = {
    title: string;
    artist: string;
    duration: string;
    id: string;
}

function PlayListItem({ title, artist, duration, id }: PlaylistItemProps) {
    const { fetchTrack, currentTrack } = useMusicPlayer();

    return (
        <div onClick={() => fetchTrack(id)} className={`flex justify-between group p-2 rounded-2xl ${ (id === currentTrack?.id) ? "bg-red" : ""} hover:bg-red dark:hover:bg-offwhite dark:hover:text-red`}>
            <div>
                <p className="font-inter font-medium text-base text-blue dark:text-offwhite group-hover:text-offwhite dark:group-hover:text-blue">{title}</p>
                <p className="font-inter font-medium text-sm text-red dark:text-teal group-hover:text-blue dark:group-hover:text-red">{artist}</p>
            </div>
            <div className="flex items-center">
                <p className={"font-inter font-medium text-sm text-red dark:text-teal group-hover:text-blue dark:group-hover:text-red"}>{duration}</p>
            </div>
        </div>
    );
}

export default PlayListItem;
import PlayListItem from "./PlayListItem";

function Playlist() {
    return (
        <div className="flex flex-col flex-1 gap-3 px-7 pt-7 pb-3 md:p-7">
            <p className="font-inter font-bold text-lg">Playlist</p>
            <div className="flex flex-col gap-2">
                <PlayListItem/>
                <PlayListItem/>
                <PlayListItem/>
                <PlayListItem/>
                <PlayListItem/>
                <PlayListItem/>
                <PlayListItem/>
                <PlayListItem/>
                <PlayListItem/>
                <PlayListItem/>
            </div>
        </div>
    );
}

export default Playlist;
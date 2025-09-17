function PlayListItem() {
    return (
        <div className="flex justify-between group p-1 rounded-2xl hover:bg-offwhite hover:text-red">
            <div>
                <p className="font-inter font-medium text-base text-offwhite group-hover:text-blue">Electric Fever</p>
                <p className="font-inter font-medium text-sm text-teal group-hover:text-red">Neon Jungle</p>
            </div>
            <div className="flex items-center">
                <p className="font-inter font-medium text-sm text-teal group-hover:text-red">8:41</p>
            </div>
        </div>
    );
}

export default PlayListItem;
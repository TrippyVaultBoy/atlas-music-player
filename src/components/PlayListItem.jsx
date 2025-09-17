function PlayListItem() {
    return (
        <div className="flex justify-between hover:bg-slate-50">
            <div>
                <p className="font-inter font-medium text-base">Electric Fever</p>
                <p className="font-inter font-medium text-sm text-slate-500">Neon Jungle</p>
            </div>
            <div className="flex items-center">
                <p className="font-inter font-medium text-sm">8:41</p>
            </div>
        </div>
    );
}

export default PlayListItem;
function PlayListItem() {
    return (
        <div className="flex justify-between group p-2 rounded-2xl hover:bg-red dark:hover:bg-offwhite dark:hover:text-red">
            <div>
                <p className="font-inter font-medium text-base text-blue dark:text-offwhite group-hover:text-offwhite dark:group-hover:text-blue">Electric Fever</p>
                <p className="font-inter font-medium text-sm text-red dark:text-teal group-hover:text-blue dark:group-hover:text-red">Neon Jungle</p>
            </div>
            <div className="flex items-center">
                <p className="font-inter font-medium text-sm text-red dark:text-teal group-hover:text-blue dark:group-hover:text-red">8:41</p>
            </div>
        </div>
    );
}

export default PlayListItem;
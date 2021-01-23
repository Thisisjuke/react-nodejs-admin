export default function MediaCard({ media }) {
    return (
        <div className="mt-8 bg-gray-800 border-t-4 border-purple-600 rounded py-3 flex-col">
            <div>
                <h5 className="mt-3 px-4 pt-2 font-semibold">
                    User media :
                </h5>
                <span className={"px-4 text-sm"}>Click to open in new window</span>
            </div>
            <div className={"mt-2"}>
                {media && media.map((m, i) => {
                    return(
                        <a
                            href={m.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline hover:text-purple-300 break-all block text-sm px-4 mt-2 space-x-1 bg-gray-800 rounded-md"
                        >
                            {m.url}
                        </a>

                    )
                })}
            </div>
        </div>

    );
}

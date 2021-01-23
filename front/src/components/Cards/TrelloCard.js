export default function TrellCard() {
    return (
        <div className="rounded-lg xl:col-span-3 bg-gray-800">
            <h5 className="font-semibold px-4 py-2 my-2">Trello Integration :</h5>

            <div>
                <span className="flex items-center space-x-2 text-sm text-green-800">
                    <div className="flex px-4 pb-8 items-start overflow-hidden">
                        <div className="rounded bg-gray-200 flex-no-shrink w-64 p-2 mr-3">
                            <div className="flex justify-between py-1">
                                <h3 className="text-sm">About Users</h3>
                                <svg
                                    className="h-4 fill-current text-grey-dark cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                                </svg>
                            </div>
                            <div className="text-sm mt-2">
                                <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-gray-100">
                                    Review Users
                                </div>

                                <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-gray-100">
                                    Check disabled Users
                                </div>

                                <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-gray-100">
                                    Differents features about Country and Cities
                                    <div className="text-grey-darker mt-2 ml-2 flex justify-between items-start">
                                        <span className="text-xs flex items-center" />
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            href={'https://github.com/Thisisjuke'}>
                                            <img
                                                className={'w-10 h-10 rounded-full'}
                                                src="https://avatars.githubusercontent.com/u/23522065?s=460&u=56b2a38516b36f60ea3a9b176a189d261b6b4ab2&v=4"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded bg-gray-200 flex-no-shrink w-64 p-2 mr-3">
                            <div className="flex justify-between py-1">
                                <h3 className="text-sm">About Chats</h3>
                                <svg
                                    className="h-4 fill-current text-grey-dark cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                                </svg>
                            </div>
                            <div className="text-sm mt-2">
                                <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-gray-100">
                                    See users Chats
                                </div>
                                <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-gray-100">
                                    Reconstruct conversations
                                </div>
                            </div>
                        </div>
                        <div className="rounded bg-gray-200 flex-no-shrink w-64 p-2 mr-3">
                            <div className="flex justify-between py-1">
                                <h3 className="text-sm">About Media</h3>
                                <svg
                                    className="h-4 fill-current text-grey-dark cursor-pointer"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path d="M5 10a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4zm7 0a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4z" />
                                </svg>
                            </div>
                            <div className="text-sm mt-2">
                                <div className="bg-white p-2 rounded mt-1 border-b border-grey cursor-pointer hover:bg-gray-100">
                                    Things about Media
                                </div>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        </div>
    );
}

export default function ReminderCard({ title, content }) {
    return (
        <div className="rounded-lg shadow-sm bg-gray-800">
            <h5 className="flex items-center justify-between mt-3 px-4 py-2 font-semibold">
                {title}
            </h5>
            <p className="px-4 py-2 text-gray-400">{content}</p>
            <ul className="mt-4 px-4 py-4 space-y-4 divide-y">
                <h5 className="font-semibold">Status :</h5>
                <li className="flex items-start items-center justify-between pt-4">
                    <div className="flex items-start space-x-3">
                        <div>
                            <h5 className="font-semibold">Backend API :</h5>
                            <span className="text-sm font-medium text-gray-400">
                                Fetch Users, Media and Chats
                            </span>
                        </div>
                    </div>
                    <a
                        href={'http://localhost:4000/api'}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-1 text-sm text-gray-100 bg-purple-600 rounded-md">
                        <span>Check</span>
                    </a>
                </li>
                <li className="py-4 text-sm font-medium text-gray-400">
                    <p className={'mt-4'}>
                        You should
                        <span className="font-normal text-purple-600">
                            {' '}
                            check data availability{' '}
                        </span>
                        through the app to ensure data is always up to date.
                    </p>
                </li>
            </ul>
        </div>
    );
}

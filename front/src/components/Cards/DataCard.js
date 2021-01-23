export default function DataCard({ title, value, stat, subtitle }) {
    return (
        <div className="p-4 transition-shadow rounded-lg shadow-sm hover:shadow-lg bg-gray-800">
            <div className="flex items-start">
                <div className="flex flex-col flex-shrink-0 space-y-2">
                    <span className="text-gray-400">{title}</span>
                    <span className="text-lg font-semibold">{value}</span>
                </div>
            </div>
            <div>
                <span className="inline-block px-2 text-sm text-white bg-purple-600 rounded">
                    {stat}
                </span>
                <span className={'ml-2 text-xs'}>{subtitle}</span>
            </div>
        </div>
    );
}

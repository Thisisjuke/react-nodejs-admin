import {useState} from "react";
import {fetchData} from "../../lib/api";

export default function ProfileCard({user}) {
    const [disabled, setDisabled] = useState(user?.isDeleted);

    const enableAccount = async e => {
        await fetchData(`api/users/${user.id}/enable`)
        setDisabled(null)
    }
    const disableAccount = async e => {
        await fetchData(`api/users/${user.id}/disable`)
        setDisabled("deleted")
    }

    return (
        <div className="bg-gray-800 border-t-4 border-purple-600 rounded py-3">
            <div className="photo-wrapper p-2">
                <img className="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="profile" />
            </div>
            <div className="p-2">
                <h3 className="text-center text-xl text-gray-100 font-medium leading-8">{user?.username}</h3>
                <div className="text-center text-gray-400 text-xs font-semibold">
                    <p>{user?.name}</p>
                </div>
                <table className="text-xs my-3">
                    <tbody>
                    <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Country</td>
                        <td className="px-2 py-2">{user?.country}</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">City</td>
                        <td className="px-2 py-2">{user?.city}</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Status</td>
                        <td className="px-2 py-2">{disabled !== null ? "Disabled" : "Active"}</td>
                    </tr>
                    <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">Action</td>
                        <td className="px-2 py-2">{disabled === null ?
                            <button
                                className={"px-2 py-1 bg-red-700 rounded hover:bg-red-600"}
                                onClick={() => disableAccount()}
                            >
                                Disable Account
                            </button>
                            :
                            <button
                                className={"px-2 py-1 bg-green-700 rounded hover:bg-green-600"}
                                onClick={() => enableAccount()}
                            >
                                Enable Account
                            </button>
                        }</td>
                    </tr>
                    </tbody>
                </table>

            </div>
        </div>
    )
}


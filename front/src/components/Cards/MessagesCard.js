import {useState} from "react";
import {fetchData} from "../../lib/api";

export default function MessagesCard({username, sent, received}) {

    return (
        <div className={"flex space-x-4"}>
            <div className="w-1/2 bg-gray-800 border-t-4 border-purple-600 rounded py-3 flex-col">
                <div>
                    <h5 className="flex items-center justify-between mt-3 px-4 py-2 font-semibold">
                        Messages Sent :
                    </h5>
                    {sent && sent.map((message, i) => {
                        return(
                            <div className="py-1 px-4 flex flex-row items-center">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0 uppercase">
                                    {username.substring(0,1)}
                                </div>
                                <div className="relative ml-3 text-xs bg-gray-200 py-2 px-4 rounded-xl text-gray-800">
                                    {message.content}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-1/2 bg-gray-800 border-t-4 border-purple-600 rounded py-3 flex-col">
                <div>
                    <h5 className="flex items-center justify-between mt-3 px-4 py-2 font-semibold">
                        Messages Received :
                    </h5>
                    {received && received.map((message, i) => {
                        return(
                            <div className="py-1 px-4 flex items-center justify-start flex-row-reverse">
                                <div
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                >
                                    ?
                                </div>
                                <div
                                    className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl text-gray-800"
                                >
                                    {message.content}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

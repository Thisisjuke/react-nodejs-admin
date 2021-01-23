import React from "react";

export default function List({ title, yo, data, countryCallback, disabled }) {
    return (
        <div className="border-t-4 border-purple-600 rounded bg-gray-800 p-2 text-sm">
            <h5 className="flex items-center justify-between mb-4 py-2 font-semibold">
                {title}
            </h5>
            {!yo && data && data.map((val, i) => {
                return(
                    <div
                        onClick={()=>countryCallback(val)}
                        className={`${!disabled ? "hover:text-purple-300 hover:underline cursor-pointer" : ""}`}
                    >
                        {val}
                    </div>
                )
            })}
        </div>
    );
}

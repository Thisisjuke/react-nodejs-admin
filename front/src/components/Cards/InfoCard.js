import React, { useState } from 'react';

export default function InfoCard({ title, content }) {
    const [visible, setVisible] = useState(true);

    return (
        <div className={`m-4 bg-gray-800 rounded-lg text-xs ${visible ? '' : 'hidden'}`}>
            <div className="border-t-4 border-purple-600 rounded">
                <div className="px-6 py-4">
                    <h3 className="font-bold text-purple-600">{title}</h3>
                    <p className="mb-1 py-4 text-gray-400">{content}</p>
                    <button
                        onClick={() => setVisible(false)}
                        className="cursor-pointer py-1 px-2 text-center bg-purple-600 text-gray-100 hover:bg-gray-200 hover:text-gray-800 rounded-lg">
                        I understand
                    </button>
                </div>
            </div>
        </div>
    );
}

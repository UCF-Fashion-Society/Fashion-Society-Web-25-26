import React from 'react'

function Event({ description: any }) {
    return (
        <div className="via-navy-500 mt-4 w-1/4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-xl">
            <span className="block rounded-xl bg-white sm:p-2">
                <div className="sm:pr-8">
                    <p className="mt-2 text-sm text-black">{description}</p>
                </div>
            </span>
        </div>
    )
}

export default Event

import React from 'react'

const Peraturan = () => {
    return (
        <div className="w-full lg:h-screen flex flex-col justify-center lg:justify-evenly">
            <div className="m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                PERATURAN TERKAIT
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 m-6">
                <div className="h-32 w-full bg-purple-400"></div>
                <div className="h-32 w-full bg-red-400"></div>
                <div className="h-32 w-full bg-orange-400"></div>
                <div className="h-32 w-full bg-blue-400"></div>
            </div>

        </div>
    )
}

export default Peraturan

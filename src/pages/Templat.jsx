import React from 'react'
import { templat } from '../data/templat'

const Templat = () => {
    return (
        < div className="dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >
            <div className="w-5/6 mx-auto">
                <div className=" text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                    TEMPLAT SURAT
                </div>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-items justify-center">
                    {templat.map((item) => (
                        <div className="outline outline-1 h-52 p-2 text-center leading-[28px] hover:bg-slate-400 hover:text-white hover:scale-105 hover:outline-black duration-300 cursor-pointer">{item.judul}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Templat

import React, { useState } from 'react'
import { berlaku } from '../data/berlaku'

const Berlaku = () => {

    const [indeks, setIndeks] = useState(0);

    return (
        <div className="mt-20 mb-10 min-h-screen md:5/6 lg:w-2/3 mx-auto dark:text-white dark:bg-[#0f172a]">
            <h1 className="text-center text-2xl m-4 font-bold">BERLAKUNYA HUKUMAN DISIPLIN DAN PENDOKUMENTASIAN KEPUTUSAN HUKUMAN DISIPLIN</h1>
            <div className="flex justify-center flex-col md:flex-row text-center w-5/6 mx-auto md:w-full gap-4">
                {berlaku.map((item) => (
                    <div
                        onClick={() => setIndeks(item.indeks)}
                        className={`p-2 outline rounded-lg outline-black outline-1 cursor-pointer ${indeks === item.indeks ? "bg-blue-400" : ""} dark:outline-white`}>
                        {item.bagian}
                    </div>
                ))}
            </div>

            <div className="outline outline-black outline-1 mt-4 dark:outline-white"></div>

            <div className="text-center font-bold text-xl m-4">{berlaku[indeks].bagian}</div>
            <div className="mt-5">
                {berlaku[indeks].konten.map((item) => (
                    <div className=' text-justify p-2 m-2  bg-[#e4fab8] dark:bg-[#0f172a] dark:outline-white dark:outline dark:outline-1 rounded-xl'>{item.uraian}</div>
                ))
                }
            </div>


        </div >
    )
}

export default Berlaku

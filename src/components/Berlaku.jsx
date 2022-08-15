import React, { useState } from 'react'
import { berlaku } from '../data/berlaku'

const Berlaku = () => {

    const [indeks, setIndeks] = useState(0);

    return (
        <div className="mt-16 md:5/6 lg:w-2/3 mx-auto font-Montserrat-Regular md:h-screen dark:text-white dark:bg-[#1C2C50]">
            <h1 className="text-center text-2xl m-4 font-bold">BERLAKUNYA HUKUMAN DISIPLIN DAN PENDOKUMENTASIAN KEPUTUSAN HUKUMAN DISIPLIN</h1>
            <div className="flex justify-center gap-4">
                {berlaku.map((item) => (
                    <div
                        onClick={() => setIndeks(item.indeks)}
                        className={`p-2 outline outline-black outline-1 cursor-pointer ${indeks === item.indeks ? "bg-blue-200" : ""} dark:outline-white`}>
                        {item.bagian}
                    </div>
                ))}
            </div>

            <div className="outline outline-black outline-1 mt-4 dark:outline-white"></div>

            <div className="text-center font-bold text-xl m-4">{berlaku[indeks].bagian}</div>
            <div className="mt-5">
                {berlaku[indeks].konten.map((item) => (
                    <div className='p-2 m-2  bg-amber-200 dark:bg-[#1C2C50] dark:outline-white dark:outline dark:outline-1'>{item.uraian}</div>
                ))
                }
            </div>


        </div >
    )
}

export default Berlaku

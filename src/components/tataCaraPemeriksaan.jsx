import React, { useState } from 'react'
import { pemeriksaan } from '../data/pemeriksaan'

const TataCaraPemeriksaan = () => {

    const [pasal, setPasal] = useState(0)

    const pemanggilan = 0;

    return (
        <div className="mt-16 md:5/6 lg:w-2/3 mx-auto font-Montserrat-Regular md:h-screen dark:text-white">
            {/* Judul */}
            <h1 className="text-center text-2xl m-4 font-bold">TATA CARA PEMERIKSAAN, PENJATUHAN, DAN PENYAMPAIAN KEPUTUSAN HUKUMAN DISIPLIN</h1>
            {/* Konten */}
            <div className="flex outline flex-wrap justify-center">
                {pemeriksaan.map((item) => (
                    <div
                        onClick={() => setPasal(item.id)}
                        className={`p-2 m-2 outline ${pasal === item.id ? "bg-blue-200" : ""} cursor-pointer `}>{item.bagian}</div>
                ))
                }
            </div>

            <div className="text-center font-bold text-xl mt-6">{pemeriksaan[pasal].bagian}</div>
            <div className="outline outline-black outline-1"></div>
            <div className="mt-6 rounded-md">
                {
                    pemeriksaan[pasal].konten && pemeriksaan[pasal].konten.map((detil) => (
                        <div className="m-2 p-3 rounded-xl bg-purple-200">{detil.uraian}</div>
                    ))
                }
            </div>

        </div >


    )
}

export default TataCaraPemeriksaan

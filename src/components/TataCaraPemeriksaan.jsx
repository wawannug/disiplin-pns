import React, { useState } from 'react'
import { pemeriksaan } from '../data/pemeriksaan'

const TataCaraPemeriksaan = () => {

    const [pasal, setPasal] = useState(0)

    return (
        <div className="mt-20 mb-16 md:5/6 lg:w-2/3 mx-auto font-Montserrat-Regular h-screen dark:text-white">
            {/* Judul */}
            <h1 className="text-center text-2xl m-4 font-bold">TATA CARA PEMERIKSAAN, PENJATUHAN, DAN PENYAMPAIAN KEPUTUSAN HUKUMAN DISIPLIN</h1>
            {/* Konten */}
            {/* <div className="flex outline flex-wrap justify-center">
                {pemeriksaan.map((item) => (
                    <div
                        onClick={() => setPasal(item.id)}
                        className={`p-2 m-2 outline ${pasal === item.id ? "bg-blue-200" : ""} cursor-pointer `}>{item.bagian}</div>
                ))
                }
            </div> */}
            <select
                className="mt-6 md:block md:mx-auto outline w-full md:w-2/3  rounded-lg p-1 dark:bg-[#0f172a] dark:outline-white"
                onChange={(e) => setPasal(e.target.value)}>
                {pemeriksaan.map((item) => (
                    <option key={item.id} value={item.id}>{item.bagian}</option>
                ))}
            </select>

            <div className="text-center font-bold text-xl mt-6">{pemeriksaan[pasal].bagian}</div>
            <div className="outline outline-black outline-1 dark:outline-white"></div>
            <div className="mt-6 rounded-md ">
                {
                    pemeriksaan[pasal].konten && pemeriksaan[pasal].konten.map((detil) => (
                        <div className="m-2 p-3 rounded-xl bg-[#e4fab8] dark:bg-[#0f172a] dark:outline-white dark:outline dark:outline-1 text-justify">{detil.uraian}</div>
                    ))
                }
            </div>

        </div >


    )
}

export default TataCaraPemeriksaan

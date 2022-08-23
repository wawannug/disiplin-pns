import React, { useState } from 'react'
import { pejabat } from '../data/pejabat'

const PejabatBerwenang = () => {

    const [index, setIndex] = useState(0)

    return (
        < div className="dark:bg-[#0f172a] mt-20 mb-10 min-h-screen w-5/6 lg:w-2/3 mx-auto my-4 dark:text-white" >
            <h1 className="text-center text-2xl m-4 font-bold">PEJABAT YANG BERWENANG MENGHUKUM</h1>
            {/* Navigasi Pejabat yang berwenang */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 justify-center">
                {pejabat.map((item) => (
                    <div
                        onClick={() => setIndex(item.indeks)}
                        className={`text-center flex items-center justify-center outline p-2 cursor-pointer ${item.indeks === index ? "bg-pink-300" : ""} `}>{item.jabatan}
                    </div>
                ))}
            </div> */}
            <select
                className="mt-6 md:block md:mx-auto outline w-full md:w-2/3 rounded-lg p-1 dark:bg-[#0f172a] dark:outline-white"
                onChange={(e) => setIndex(e.target.value)}>
                {pejabat.map((item) => (
                    <option key={item.indeks} value={item.indeks}>{item.jabatan}</option>
                ))}
            </select>

            {/*  - awal -  */}
            <div>
                <h1 className="text-center font-bold mt-6 text-xl">{pejabat[index].jabatan}</h1>
                <div className="outline outline-1 "></div>

                {/* Konten */}

                {pejabat[index].info.map((detil) => (
                    <div>
                        <div className="bg-[#BDD293] dark:bg-[#0f172a] outline outline-black outline-1 dark:outline-white p-2 my-4 rounded-xl text-justify">
                            {detil.penjelasan}
                            {detil?.pihak1 && <div className="pl-1 my-1 outline outline-1 outline-black dark:outline-white rounded-xl">{detil?.pihak1}</div>}
                            {detil?.pihak2 && <div className="pl-1 my-1 outline outline-1 outline-black dark:outline-white rounded-xl">{detil?.pihak2}</div>}
                            {detil.pihak3 && <div className="pl-1 my-1 outline outline-1 outline-black dark:outline-white rounded-xl">{detil?.pihak3}</div>}
                            {detil.pihak4 && <div className="pl-1 my-1 outline outline-1 outline-black dark:outline-white rounded-xl">{detil?.pihak4}</div>}
                            {detil?.keterangan}
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default PejabatBerwenang

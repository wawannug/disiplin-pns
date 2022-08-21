import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { prosedur } from '../../data/prosedur'

const Artikel3TataCaraPemeriksaan = () => {

    const [tahapan, setTahapan] = useState(0)

    return (
        < div className="w-5/6 lg:w-2/3 mx-auto dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >
            <h1 className="text-xl font-bold text-center">Prosedur dan Tata Cara Penjatuhan Hukuman Disiplin</h1>
            <div className="flex justify-center gap-6 mt-6">
                {prosedur.map((item) =>
                    <div className='outline outline-1 p-2 text-center'>{item.tahapan}</div>
                )}
            </div>

            <div className="">
                <select
                    className="mt-6 outline block mx-auto w-2/3 lg:w-1/3 rounded-lg p-1 dark:bg-[#0f172a] dark:outline-white"
                    onChange={(e) => setTahapan(e.target.value)}>
                    {prosedur.map((item) => (
                        <option key={item.id - 1} value={item.id - 1}>{item.tahapan}</option>
                    ))}
                </select>
            </div>
            <div>
                <h1 className="text-center text-xl mt-6 font-bold">{prosedur[tahapan].tahapan}</h1>
                {prosedur[tahapan].gambar && <img className="w-full mx-auto outline outline-1 mt-6" src={require('../../assets/images/' + prosedur[tahapan]?.gambar)} />}
                {prosedur[tahapan].rincian && prosedur[tahapan].rincian.map((item) => (
                    <div className="p-2 m-2 bg-green-200 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 rounded-xl">{item.detil}</div>
                ))}

            </div>
        </div>
    )
}

export default Artikel3TataCaraPemeriksaan

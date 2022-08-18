import React from 'react'
import { prosedur } from '../../data/prosedur'

const Artikel3TataCaraPemeriksaan = () => {
    return (
        < div className="w-5/6 lg:w-2/3 mx-auto dark:bg-[#0f172a] mt-16 min-h-screen dark:text-white" >
            <h1 className="text-xl font-bold text-center">Prosedur dan Tata Cara Penjatuhan Hukuman Disiplin</h1>
            <div className="flex justify-center gap-6 mt-6">
                {prosedur.map((item) =>
                    <div className='basis-1/4 outline outline-1 p-2 text-center'>{item.tahapan}</div>
                )}
            </div>
        </div>
    )
}

export default Artikel3TataCaraPemeriksaan

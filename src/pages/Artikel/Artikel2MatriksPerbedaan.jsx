import React from 'react'
import { perbandingan } from '../../data/perbandingan'

const Artikel2MatriksPerbedaan = () => {
    return (
        < div className="w-5/6 lg:w-2/3 mx-auto dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >
            <h1 className="text-xl font-bold text-center">Matriks Perbandingan <br /> Peraturan Pemerintah Nomor 53 Tahun 2010 dengan Peraturan Pemerintah Nomor 94 Tahun 2021</h1>
            {perbandingan.map((item) => (
                <div className="mt-6">
                    <div className="text-center font-bold ">{item.perbedaan}</div>
                    <div className="flex gap-3 ">
                        <div className="basis-1/2 outline outline-1 p-2">
                            <div className="text-center font-bold">PP 53 Tahun 2010</div>
                            <div className="text-justify">{item.peraturan53}</div>
                        </div>
                        <div className="basis-1/2 outline outline-1 p-2">
                            <div className="text-center font-bold">PP 94 Tahun 2021</div>
                            <div className="text-justify">{item.peraturan94}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Artikel2MatriksPerbedaan

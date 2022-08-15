import React from 'react'
import { pejabat } from '../data/pejabat'

const PejabatBerwenang = () => {
    return (
        < div className="dark:bg-[#0f172a] mt-16 min-h-screen w-5/6 lg:w-2/3 mx-auto my-4 dark:text-white" >
            <h1 className="text-center text-2xl m-4 font-bold">PEJABAT YANG BERWENANG MENGHUKUM</h1>
            {/* Navigasi Pejabat yang berwenang */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 justify-center">
                {pejabat.map((item) => (
                    <div className="text-center flex items-center justify-center outline p-2 ">{item.jabatan}</div>
                ))}
            </div>

            {/* Presiden - awal */}
            <div>
                <h1 className="text-center font-bold mt-6 text-xl">Presiden</h1>
                <div className="outline outline-1 "></div>
                {/* Pertama */}
                <div className="p-2 mt-4 bg-slate-300 dark:bg-[#0f172a] dark:outline dark:outline-white rounded-2xl">
                    Presiden  menetapkan penjatuhan Hukuman Disiplin bagi PNSyang menduduki:<br />
                    <div className="flex">
                        <p className="w-4">a.</p>
                        <p className='text-justify'>Jabatan Pimpinan Tinggi Utama; dan</p>
                    </div>
                    <div className="flex">
                        <p className="w-4">b.</p>
                        <p className='text-justify'>Jabatan Pimpinan Tinggi Madya yang merupakan Pejabat Pembina Kepegawaian,</p>
                    </div>
                    <div>untuk semua jenis Hukuman Disiplin sebagaimana dimaksud dalam Pasal 8 ayat (2), ayat (3), dan ayat (4)</div>
                </div>

                {/* Kedua */}
                <div className="p-2 mt-4 bg-slate-300 dark:bg-[#0f172a] dark:outline dark:outline-white rounded-2xl">
                    Presiden menetapkan penjatuhan Hukuman Disiplin bagi PNSyang menduduki:<br />
                    <div className="flex">
                        <p className="w-4">a.</p>
                        <p className='text-justify'>Jabatan Pimpinan Tinggi Madya;</p>
                    </div>
                    <div className="flex">
                        <p className="w-4">b.</p>
                        <p className='text-justify'>Jabatan Fungsional Jenjang Ahli Utama; dan</p>
                    </div>
                    <div className="flex">
                        <p className="w-4">c.</p>
                        <p className='text-justify'>Jabatan lain yang pengangkatan dan pemberhentiannya menjadi wewenang Presiden</p>
                    </div>
                    <div>untuk jenis Hukuman Disiplin berat sebagaimana dimaksud dalam Pasal 8 ayat (4) huruf c.</div>
                </div>
            </div>

            {/* Ketiga */}
            <div className="p-2 mt-4 bg-slate-300 dark:bg-[#0f172a] dark:outline dark:outline-white rounded-2xl">
                Penjatuhan Hukuman Disiplin sebagaimana dimaksud pada ayat (1) dan ayat (2) ditetapkan berdasarkan usul:<br />
                <div className="flex">
                    <p className="w-4">a.</p>
                    <p className='text-justify'> Menteri yang mengoordinasikan bagi PNS yang menduduki Jabatan Pimpinan Tinggi Utama; dan</p>
                </div>
                <div className="flex">
                    <p className="w-4">b.</p>
                    <p className='text-justify'>Pejabat Pembina Kepegawaian bagi PNS yang menduduki Jabatan Pimpinan Tinggi Madya dan jabatan lain yang pengangkatan dan pemberhentiannya menjadi wewenang Presiden.</p>
                </div>
            </div>

            {/* Presiden - akhir */}
        </div >
    )
}

export default PejabatBerwenang

import React from 'react'
import { pedomanPelaksanaan } from '../../data/pedomanPelaksanaan'

const Artikel4PedomanPelaksanaan = () => {
    return (
        < div className="w-5/6 lg:w-2/3 mx-auto dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >
            <h1 className="text-xl font-bold text-center">Pedoman Pelaksanaan Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin Pegawai Negeri Sipil di Lingkungan Kementerian Keuangan</h1>

            <div>Pedoman pelaksanaan Disiplin PNS di Lingkungan Kementerian Keuangan meliputi:</div>
            {pedomanPelaksanaan.map((item) => (
                <div className="bg-sky-200 p-1 my-1">{item.ketentuan}</div>
            ))}
        </div>
    )
}

export default Artikel4PedomanPelaksanaan

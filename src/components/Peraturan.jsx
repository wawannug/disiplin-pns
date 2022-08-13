import React from 'react'

const Peraturan = () => {
    return (
        <div className="w-full lg:h-screen flex flex-col lg:flex-row justify-center lg:justify-evenly">
            <div className="m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                PERATURAN TERKAIT
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-6 m-6">
                <div className="h-32 w-full bg-purple-400 rounded-xl">
                    Peraturan Pemerintah Republik Indonesia Nomor 94 Tahun 2021 tentang Disiplin PNS
                </div>
                <div className="h-32 w-full bg-red-400">
                    Keputusan Menteri Keuangan Republik Indonesia Nomor 5/KMK.01/2022 tentang Pedoman Pelaksanaan Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin Pegawai Negeri Sipil di Lingkungan Kementerian Keuangan
                </div>
                <div className="h-32 w-full bg-orange-400">
                    Peraturan Badan Kepegawaian Negara Nomor 6 Tahun 2022 tentang Peraturan Pelaksanaan Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin Pegawai Negeri Sipil
                </div>
                <div className="h-32 w-full bg-blue-400">
                    Peraturan Menteri Keuangan Republik Indonesia Nomor 97/PMK.09/2018 tentang Petunjuk Pelaksanaan Pemeriksaan Pelanggaran Disiplin dan Penjatuhan Hukuman Disiplin Pegawai Negeri Sipil di Lingkungan Kementerian Keuangan
                </div>
            </div>

        </div>
    )
}

export default Peraturan

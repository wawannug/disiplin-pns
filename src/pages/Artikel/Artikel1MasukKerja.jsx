import React from 'react'
import { pelanggaran } from '../../data/masukKerja'

const Artikel1MasukKerja = () => {
    return (
        < div className="w-5/6 lg:w-2/3 mx-auto dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >
            <h1 className="text-xl font-bold text-center">Kewajiban Masuk Kerja dan Menaati Ketentuan Jam Kerja</h1>

            <h1 className="font-bold mt-6 text-xl">Pengertian</h1>
            <div className="mt-2 text-justify"> Masuk Kerja adalah keadaan melaksanakan tugas baik di
                dalam maupun di luar kantor. Masuk Kerja dan menaati ketentuan jam kerja adalah kewajiban melaksanakan tugas sesuai dengan ketentuan sistem kerja yang dapat dilaksanakan melalui fleksibilitas dalam pengaturan lokasi dan waktu bekerja</div>

            <h1 className="font-bold mt-6 text-xl">Jenis Hukuman terhadap Pelanggaran</h1>
            {pelanggaran.map((item) => (
                <div>
                    <div className="font-bold text-center mt-4">Hukuman Disiplin {item.tingkatan}</div>
                    {item.kategori.map((detil) => (
                        <div className="flex gap-2 justfy-center">
                            <div className="m-1 basis-1/3 p-1 bg-emerald-200 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 rounded-xl">{detil.jenis}</div>
                            <div className="text-justify m-1 basis-2/3 p-1 bg-emerald-200 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 rounded-xl">{detil.penyebab}</div>
                        </div>
                    ))}
                </div>
            ))}

        </div>
    )
}

export default Artikel1MasukKerja

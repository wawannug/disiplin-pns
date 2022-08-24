import React from 'react'
import {
    pedomanPelaksanaan,
    pelanggaran,
    pemeriksaan,
    penetapan,
    jamKerja,
    pemotongan,
    tambahan
} from '../../data/pedomanPelaksanaan'

const Artikel4PedomanPelaksanaan = () => {
    return (
        < div className="w-5/6 lg:w-2/3 mx-auto dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >
            <h1 className="text-xl font-bold text-center">Pedoman Pelaksanaan Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin Pegawai Negeri Sipil di Lingkungan Kementerian Keuangan</h1>

            <div>Pedoman pelaksanaan Disiplin PNS di Lingkungan Kementerian Keuangan meliputi:</div>
            {pedomanPelaksanaan.map((item) => (
                <div className="bg-sky-200 p-1 my-1">{item.ketentuan}</div>
            ))}

            {/* a. Pelanggaran terhadap kewajiban dan/atau larangan
            {pelanggaran.map(item => (
                <div key={item.id}>
                    <div className="text-lg font-bold text-center">{item.uraian}</div>
                    {item.jenis.map(detil => (
                        <div className="bg-green-200 p-1 m-1 text-justify rounded-lg flex ">
                            <div className="w-4 mr-1">{detil.id}. </div>
                            <div className="">{detil.pelanggaran}</div>
                        </div>
                    ))}
                </div>
            ))} */}


            {/* b. Mekanisme Pelaksanaan Pemeriksaan dugaan pelanggaran hukuman disiplin
            {pemeriksaan.map(item => (
                <div className="bg-blue-200 p-1 m-1 text-justify rounded-lg">
                    <div>{item.uraian}</div>
                    {item.ketentuan && item.ketentuan.map(detil => (
                        <div className="flex">
                            <div className="m-1">{detil.id}. </div>
                            <div className="m-1">{detil.poin}</div>
                        </div>
                    ))}
                </div>
            ))} */}

            {/* c. Mekanisme penetapan penjatuhan hukuman disiplin*/}


            {/* d. Mekanisme penyelesaian dugaan pelanggaran jam kerja
            {jamKerja.map(item => (
                <div className="bg-purple-200 p-1 m-1 text-justify rounded-lg">
                    <div>{item.uraian}</div>
                    {item.ketentuan?.map(detil => (
                        <div className="flex outline outline-purple-300 gap-1 my-2 rounded-md ">
                            <div className="mr-1">{detil.id}. </div>
                            <div>{detil.ketentuan}</div>
                        </div>
                    ))}
                </div>
            ))} */}

            {/* e. Implementasi pemotongan tunjangan terhadap Pegawai Negeri Sipil yang dijatuhi hukuman disiplin */}
            {pemotongan.map(item => (
                <div>
                    {item.jenis && (
                        <>
                            <div className="text-justify">Untuk jenis hukuman disiplin {item?.jenis}, dilakukan pemotongan tunjangan dengan ketentuan sebagai berikut:</div>
                            <table className="border-collapse shadow border border-black dark:border-white">
                                <tr >
                                    <th className="border border-black dark:border-white">Jenis Hukuman</th>
                                    <th className="border border-black dark:border-white">Besar Pemotongan</th>
                                    <th className="border border-black dark:border-white">Lama Waktu</th>
                                </tr>
                                {item.uraian?.map(detil => (
                                    <tr>
                                        <td className="border border-black dark:border-white md:text-justify p-1">{detil.hukuman}</td>
                                        <td className="border border-black dark:border-white text-center p-1">{detil.besaran}</td>
                                        <td className="border border-black dark:border-white text-center p-1">{detil.lama}</td>
                                    </tr>
                                ))}
                            </table>
                        </>
                    )}
                </div>
            ))}
            <div className="text-justify">Penerapan pemotongan tunjangan diperuntukkan untuk:</div>
            {tambahan.map(item => (
                <div>
                    <div className="text-justify flex">
                        <div className="mr-2">{item.id}.</div>
                        <div>
                            <div>{item.jenis}</div>
                            {item.uraian?.map(detil => (
                                <div className="text-justify flex" >
                                    <div className="mr-2">{detil.id}. </div>
                                    <div>{detil.uraian}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Artikel4PedomanPelaksanaan

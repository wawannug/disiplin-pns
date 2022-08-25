import React, { useState } from 'react'
import {
    pedomanPelaksanaan,
    pelanggaran,
    pemeriksaan,
    penetapan,
    jenisHukuman,
    jamKerja,
    pemotongan,
    tambahan
} from '../../data/pedomanPelaksanaan'

const Artikel4PedomanPelaksanaan = () => {

    const [option, setOption] = useState(1)


    return (
        < div className="w-5/6 lg:w-2/3 mx-auto dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >
            <h1 className="text-xl font-bold text-center">Pedoman Pelaksanaan Peraturan Pemerintah Nomor 94 Tahun 2021 tentang Disiplin Pegawai Negeri Sipil di Lingkungan Kementerian Keuangan</h1>

            <div>Pedoman pelaksanaan Disiplin PNS di Lingkungan Kementerian Keuangan meliputi:</div>
            {pedomanPelaksanaan.map((item) => (
                <div
                    onClick={() => setOption(item.id)}
                    className={`cursor-pointer p-2 my-1 rounded-xl text-justify ${item.id === option ? "bg-sky-500" : "bg-sky-200 dark:bg-[#0f172a] dark:outline-white dark:outline-1 dark:outline"} `}>{item.ketentuan}</div>
            ))
            }


            <h1 className="text-xl text-center my-6">{pedomanPelaksanaan[option - 1].ketentuan}</h1>


            {/* a. Pelanggaran terhadap kewajiban dan/atau larangan */}
            {option === 1 && pelanggaran.map(item => (
                <div key={item.id}>
                    <div className="text-lg text-center">{item.uraian}</div>
                    {item.jenis.map(detil => (
                        <div className="bg-green-200 dark:bg-[#0f172a] dark:outline-white dark:outline-1 dark:outline p-1 m-1 text-justify rounded-lg flex ">
                            <div className="w-4 mr-1">{detil.id}. </div>
                            <div className="">{detil.pelanggaran}</div>
                        </div>
                    ))}
                </div>
            ))}


            {/* b. Mekanisme Pelaksanaan Pemeriksaan dugaan pelanggaran hukuman disiplin */}
            {option === 2 && pemeriksaan.map(item => (
                <div className="bg-blue-200 dark:bg-[#0f172a] dark:outline-white dark:outline-1 dark:outline p-1 m-1 text-justify rounded-lg">
                    <div>{item.uraian}</div>
                    {item.ketentuan && item.ketentuan.map(detil => (
                        <div className="flex">
                            <div className="m-1">{detil.id}. </div>
                            <div className="m-1">{detil.poin}</div>
                        </div>
                    ))}
                </div>
            ))}

            {/* c. Mekanisme penetapan penjatuhan hukuman disiplin*/}
            {option === 3 && <>
                {
                    penetapan.map(item => (
                        <div className="flex bg-orange-200 dark:bg-[#0f172a] dark:outline-white dark:outline dark:outline-1 my-2 p-1 rounded-lg">
                            <div className="mr-2 text-lg ">{item.id}. </div>
                            <div className="text-justify text-lg">{item.uraian}</div>
                        </div>
                    ))
                }

                {
                    jenisHukuman.map(item => (
                        <div className="text-center ">
                            <div className="text-lg">Hukuman Disiplin {item.tingkat}</div>
                            <div className="flex flex-col md:flex-row justify-center gap-4 ">
                                {item.tingkatan.map(detil => (
                                    detil.jenis && <div className=" p-2 basis-1/3 rounded-lg bg-orange-200  dark:bg-[#0f172a] dark:outline-white dark:outline-1 dark:outline">{detil?.jenis}</div>
                                ))}
                            </div>
                            <div className="flex flex-col justify-center gap-4 ">
                                {item.tingkatan.map(detil => (
                                    detil.pihak && <details className="bg-orange-200 dark:bg-[#0f172a] dark:outline-white dark:outline-1 dark:outline  p-2 outline outline-1 rounded-lg cursor-pointer">
                                        <summary className="text-left ">{detil.pihak}</summary>
                                        <div className="text-left">{detil.penjelasan}</div>
                                        {detil.hukuman?.map(rinci => (
                                            <div>
                                                <div className="text-left flex ">
                                                    <div className="mr-2">{rinci.id}</div>
                                                    <div>{rinci.hukuman}</div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="text-left">{detil?.keterangan}</div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </>
            }



            {/* d. Mekanisme penyelesaian dugaan pelanggaran jam kerja */}
            {option === 4 && <>
                {jamKerja.map(item => (
                    <div className="bg-purple-200 dark:bg-[#0f172a] dark:outline-white dark:outline-1 dark:outline p-1 m-1 text-justify rounded-lg">
                        <div>{item.uraian}</div>
                        {item.ketentuan?.map(detil => (
                            <div className="flex gap-1 my-2 rounded-md  ">
                                <div className="mr-1">{detil.id}. </div>
                                <div>{detil.ketentuan}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </>}
            {/* e. Implementasi pemotongan tunjangan terhadap Pegawai Negeri Sipil yang dijatuhi hukuman disiplin */}
            {option === 5 && <>
                {pemotongan.map(item => (
                    <div>
                        {item.jenis && (
                            <div className=" p-2 m-2">
                                <div className="text-justify rounded-lg my-2 ">Untuk jenis hukuman disiplin {item?.jenis}, dilakukan pemotongan tunjangan dengan ketentuan sebagai berikut:</div>
                                <table className="border-collapse shadow border border-black dark:border-white bg-amber-200 dark:bg-[#0f172a] dark:outline-white dark:outline-1 dark:outline">
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
                            </div>
                        )}
                    </div>
                ))}
                <div className="text-justify p-2">Penerapan pemotongan tunjangan diperuntukkan untuk:</div>
                {tambahan.map(item => (
                    <div>
                        <div className="text-justify flex p-2 rounded-lg">
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
            </>}
        </div >
    )
}

export default Artikel4PedomanPelaksanaan

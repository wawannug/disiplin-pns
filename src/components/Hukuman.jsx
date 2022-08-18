import React, { useState } from 'react'
import { hukuman } from '../data/hukuman'

function Hukuman() {

    const [ringan, setRingan] = useState(true);
    const [sedang, setSedang] = useState(false);
    const [berat, setBerat] = useState(false)

    return (
        < div className="dark:bg-[#0f172a] mt-20 mb-10 min-h-screen w-5/6 lg:w-2/3 mx-auto dark:text-white" >
            <h1 className="text-center text-2xl m-4 font-bold">TINGKAT DAN JENIS HUKUMAN</h1>
            <div className="flex justify-center gap-4 m-4  outline">
                <button onClick={() => setRingan(!ringan)} className={`outline outline-1 p-1 m-2 ${ringan === true ? "bg-sky-500" : ""}`}>Hukuman Disiplin Ringan</button>
                <button onClick={() => setSedang(!sedang)} className={`outline outline-1 p-1 m-2 ${sedang === true ? "bg-sky-500" : ""}`}>Hukuman Disiplin Sedang</button>
                <button onClick={() => setBerat(!berat)} className={`outline outline-1 p-1 m-2 ${berat === true ? "bg-sky-500" : ""}`}>Hukuman Disiplin Berat</button>
            </div>

            {/* Awal Hukuman Disiplin Ringan */}
            {ringan === true && (
                <div>
                    <h2 className="text-center text-xl mt-6">Hukuman Disiplin {hukuman[0].tingkat}</h2>
                    <div className="flex justify-between outline outline-1">
                        {hukuman[0].jenis.map((item) => (
                            <div className="outline outline-1 flex flex-1 m-2 p-2 justify-center text-center items-center ">{item}</div>
                        ))}
                    </div>

                    <h2 className="text-center text-xl mt-4">Pelanggaran terhadap Kewajiban</h2>
                    <h3 className='text-center font-bold mt-4'>Hukuman Disiplin {hukuman[0].tingkat} dijatuhkan bagi pelanggaran terhadap kewajiban:</h3>

                    <table className="border-collapse shadow border border-black">
                        <thead>
                            <tr>
                                <th className='border p-2'>No</th>
                                <th className='border p-2'>Kewajiban yang dilanggar</th>
                                <th className='border p-2'>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hukuman[0].kewajiban.map((isi) => (
                                    <tr>
                                        <td className='border p-2'>{isi.id}</td>
                                        <td className='text-justify border p-2'>{isi.wajib}</td>
                                        <td className='text-justify border p-2'>{isi.dampak}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>


                    <h3 className='text-center font-bold mt-4'>Hukuman Disiplin {hukuman[0].tingkat} dijatuhkan bagi dijatuhkan bagi PNS yang tidak memenuhi ketentuan:</h3>
                    <table className="border-collapse shadow border border-black">
                        <thead>
                            <tr>
                                <th className='border p-2'>No</th>
                                <th className='text-justify border p-2'>Kewajiban yang dilanggar</th>
                                <th className='text-justify border p-2'>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hukuman[0].kewajibanLain.map((isi) => (
                                    <tr>
                                        <td className='border p-2'>{isi.id}</td>
                                        <td className='border p-2'>
                                            <details >
                                                <summary className={`text-justify list-none ${isi.rincian ? "cursor-pointer" : ""}`}>{isi.wajib}</summary>
                                                {isi.rincian &&
                                                    isi.rincian.map((detil) => <div className="p-2 outline outline-1 outline-slate-300" dangerouslySetInnerHTML={{ __html: detil }}></div>)}
                                            </details>
                                        </td>
                                        <td className='text-justify border p-2'>{isi.dampak}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <h2 className="text-center text-xl mt-4">Pelanggaran terhadap Larangan</h2>
                    <h3 className='text-center font-bold mt-4'>Hukuman Disiplin {hukuman[0].tingkat} dijatuhkan bagi PNS yang melanggar ketentuan larangan:</h3>
                    <table className="border-collapse shadow border border-black">
                        <thead>
                            <tr>
                                <th className='border p-2'>No</th>
                                <th className='border p-2'>Larangan yang dilanggar</th>
                                <th className='border p-2'>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hukuman[0].larangan.map((isi) => (
                                    <tr>
                                        <td className='border p-2'>{isi.id}</td>
                                        <td className='border p-2'>
                                            <details >
                                                <summary className={`text-justify list-none ${isi.rincian ? "cursor-pointer" : ""}`}>{isi.larangan}</summary>
                                                <div>{isi.rincian && isi.rincian}<br /></div>
                                            </details>
                                        </td>
                                        <td className='text-justify border p-2'>{isi.dampak}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )}
            {/* Akhir - Hukuman Disiplin Ringan */}

            {/* Awal Hukuman Disiplin Sedang */}
            {sedang === true && (
                <div>
                    <h2 className="text-center text-xl mt-6">Hukuman Disiplin {hukuman[1].tingkat}</h2>
                    <div className="flex justify-between outline outline-1">
                        {hukuman[1].jenis.map((item) => (
                            <div className="outline outline-1 flex flex-1 m-2 p-2 justify-center text-center items-center ">{item}</div>
                        ))}
                    </div>

                    <h2 className="text-center text-xl mt-4">Pelanggaran terhadap Kewajiban</h2>
                    <h3 className='text-center font-bold mt-4'>Hukuman Disiplin {hukuman[1].tingkat} dijatuhkan bagi pelanggaran terhadap kewajiban:</h3>

                    <table className="border-collapse shadow border border-black">
                        <thead>
                            <tr>
                                <th className='border p-2'>No</th>
                                <th className='border p-2'>Kewajiban yang dilanggar</th>
                                <th className='border p-2'>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hukuman[1].kewajiban.map((isi) => (
                                    <tr>
                                        <td className='border p-2'>{isi.id}</td>
                                        <td className='text-justify border p-2'>{isi.wajib}</td>
                                        <td className='text-justify border p-2'>{isi.dampak}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>


                    <h3 className='text-center font-bold mt-4'>Hukuman Disiplin {hukuman[1].tingkat} dijatuhkan bagi dijatuhkan bagi PNS yang tidak memenuhi ketentuan:</h3>
                    <table className="border-collapse shadow border border-black">
                        <thead>
                            <tr>
                                <th className='border p-2'>No</th>
                                <th className='text-justify border p-2'>Kewajiban yang dilanggar</th>
                                <th className='text-justify border p-2'>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hukuman[1].kewajibanLain.map((isi) => (
                                    <tr>
                                        <td className='border p-2'>{isi.id}</td>
                                        <td className='border p-2'>
                                            <details >
                                                <summary className={`text-justify list-none ${isi.rincian ? "cursor-pointer" : ""}`}>{isi.wajib}</summary>
                                                {isi.rincian &&
                                                    isi.rincian.map((detil) => <div className="p-2 outline outline-1 outline-slate-300" dangerouslySetInnerHTML={{ __html: detil }}></div>)}
                                            </details>
                                        </td>
                                        <td className='text-justify border p-2'>{isi.dampak}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <h2 className="text-center text-xl mt-4">Pelanggaran terhadap Larangan</h2>
                    <h3 className='text-center font-bold mt-4'>Hukuman Disiplin {hukuman[1].tingkat} dijatuhkan bagi PNS yang melanggar ketentuan larangan:</h3>
                    <table className="border-collapse shadow border border-black">
                        <thead>
                            <tr>
                                <th className='border p-2'>No</th>
                                <th className='border p-2'>Larangan yang dilanggar</th>
                                <th className='border p-2'>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hukuman[1].larangan.map((isi) => (
                                    <tr>
                                        <td className='border p-2'>{isi.id}</td>
                                        <td className='border p-2'>
                                            <details >
                                                <summary className={`text-justify list-none ${isi.rincian ? "cursor-pointer" : ""}`}>{isi.larangan}</summary>
                                                <div>{isi.rincian && isi.rincian}<br /></div>
                                            </details>
                                        </td>
                                        <td className='text-justify border p-2'>{isi.dampak}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )}
            {/* Akhir - Hukuman Disiplin Sedang */}

            {/* Awal Hukuman Disiplin Berat */}
            {berat === true && (
                <div>
                    <h2 className="text-center text-xl mt-6">Hukuman Disiplin {hukuman[2].tingkat}</h2>
                    <div className="flex justify-between outline outline-1">
                        {hukuman[2].jenis.map((item) => (
                            <div className="outline outline-1 flex flex-1 m-2 p-2 justify-center text-center items-center ">{item}</div>
                        ))}
                    </div>

                    <h2 className="text-center text-xl mt-4">Pelanggaran terhadap Kewajiban</h2>
                    <h3 className='text-center font-bold mt-4'>Hukuman Disiplin {hukuman[2].tingkat} dijatuhkan bagi pelanggaran terhadap kewajiban:</h3>

                    <table className="border-collapse shadow border border-black">
                        <thead>
                            <tr>
                                <th className='border p-2'>No</th>
                                <th className='border p-2'>Kewajiban yang dilanggar</th>
                                <th className='border p-2'>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hukuman[2].kewajiban.map((isi) => (
                                    <tr>
                                        <td className='border p-2'>{isi.id}</td>
                                        <td className='text-justify border p-2'>{isi.wajib}</td>
                                        <td className='text-justify border p-2'>{isi.dampak}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>


                    <h3 className='text-center font-bold mt-4'>Hukuman Disiplin {hukuman[2].tingkat} dijatuhkan bagi dijatuhkan bagi PNS yang tidak memenuhi ketentuan:</h3>
                    <table className="border-collapse shadow border border-black">
                        <thead>
                            <tr>
                                <th className='border p-2'>No</th>
                                <th className='text-justify border p-2'>Kewajiban yang dilanggar</th>
                                <th className='text-justify border p-2'>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hukuman[2].kewajibanLain.map((isi) => (
                                    <tr>
                                        <td className='border p-2'>{isi.id}</td>
                                        <td className='border p-2'>
                                            <details >
                                                <summary className={`text-justify list-none ${isi.rincian ? "cursor-pointer" : ""}`}>{isi.wajib}</summary>
                                                {isi.rincian &&
                                                    isi.rincian.map((detil) => <div className="p-2 outline outline-1 outline-slate-300" dangerouslySetInnerHTML={{ __html: detil }}></div>)}
                                            </details>
                                        </td>
                                        <td className='text-justify border p-2'>{isi.dampak}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <h2 className="text-center text-xl mt-4">Pelanggaran terhadap Larangan</h2>
                    <h3 className='text-center font-bold mt-4'>Hukuman Disiplin {hukuman[2].tingkat} dijatuhkan bagi PNS yang melanggar ketentuan larangan:</h3>
                    <table className="border-collapse shadow border border-black">
                        <thead>
                            <tr>
                                <th className='border p-2'>No</th>
                                <th className='border p-2'>Larangan yang dilanggar</th>
                                <th className='border p-2'>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hukuman[2].larangan.map((isi) => (
                                    <tr>
                                        <td className='border p-2'>{isi.id}</td>
                                        <td className='border p-2'>
                                            <details >
                                                <summary className={`text-justify list-none ${isi.rincian ? "cursor-pointer" : ""}`}>{isi.larangan}</summary>
                                                {isi.rincian && <div> {isi.rincian}</div>}
                                            </details>
                                        </td>
                                        <td className='text-justify border p-2'>{isi.dampak}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            )}
            {/* Akhir - Hukuman Disiplin Sedang */}


        </div >
    )
}

export default Hukuman

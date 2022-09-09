import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contohKasus } from '../../data/contohKasus'
import { BiArrowBack } from 'react-icons/bi'

const Artikel5Detail = () => {
    const { id } = useParams()
    const item = contohKasus[id - 1]
    const navigate = useNavigate()

    return (
        < div className="w-5/6 lg:w-2/3 mx-auto dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >

            <button
                onClick={() => navigate('/artikel5')}
                className="bg-blue-300 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 p-2 rounded-lg flex items-center ">
                <div><BiArrowBack /></div>
                <div>Kembali</div>
            </button>

            <h1 className="font-bold text-lg lg:text-xl text-center mt-4">
                {item.jenis}
            </h1>
            {/* Tipe kasus lebih dari 1 */}
            {item.konten1 && <div className="mt-8 bg-green-200 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 p-2 rounded-lg text-justify">{item?.konten1}</div>}
            {item.konten2 && <div className="mt-8 bg-green-200 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 p-2 rounded-lg text-justify">{item?.konten2}</div>}
            {item.konten3 && <div className="mt-8 bg-green-200 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 p-2 rounded-lg text-justify">{item?.konten3}</div>}

            {/* Tipe satu kasus banyak paragraf */}
            {item.kasus1 && <div className="mt-8 bg-green-200 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 p-2 rounded-lg text-justify">
                <div className="py-2">{item?.kasus1}</div>
                <div className="py-2">{item?.kasus2}</div>
                <div className="py-2">{item?.kasus3}</div>
            </div>}
            {item.isi?.map(item => (
                <div className="mt-8 bg-green-200 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 p-2 rounded-lg">
                    {/* Tipe 1 kasus dengan lebih dari 1 judul */}
                    {item.judul && <div className="font-bold text-center">{item.judul}</div>}
                    {item.kasus1 && <div className="text-justify py-1">{item?.kasus1}</div>}
                    {item.kasus2 && <div className="text-justify py-1">{item?.kasus2}</div>}
                    {item.kasus3 && <div className="text-justify py-1">{item?.kasus3}</div>}
                </div>
            ))}

        </div>
    )
}

export default Artikel5Detail

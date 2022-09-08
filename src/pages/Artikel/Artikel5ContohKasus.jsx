import React from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { contohKasus } from '../../data/contohKasus'

const Artikel5ContohKasus = () => {
    const [search, setSearch] = useState("")
    const kasus = contohKasus.filter((item) => {
        return search.toLowerCase() === ''
            ? item.jenis
            : item.jenis.toLowerCase().includes(search.toLowerCase())
    })
    const navigate = useNavigate()
    return (
        < div className="w-5/6 lg:w-2/3 mx-auto dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >
            <h1 className="text-center font-bold lg:text-xl">Contoh-Contoh Kasus Disiplin PNS</h1>

            <input
                className="shadow m-4 block mx-auto outline outline-1 dark:outline-white p-1 w-2/3 dark:bg-[#0f172a] dark:text-white rounded-lg"
                type="text"
                name="cari"
                placeholder='cari contoh kasus...'
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="grid grid-cols-1 gap-2 mt-4">
                {kasus.map((item, index) => (
                    <div
                        key={index}
                        className="bg-green-200 dark:bg-[#0f172a] dark:outline dark:outline-white dark:outline-1 p-2 rounded-xl hover:translate-x-2 duration-200 cursor-pointer
                        "
                        onClick={() => navigate(`/artikel5/${item.id}`)}
                    >{item.jenis}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Artikel5ContohKasus

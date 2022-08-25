import React, { useState } from 'react'
import { larangan } from '../data/larangan'

const KomponenLarangan = () => {

    const [search, setSearch] = useState('')

    const larang = larangan.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.larangan.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className="dark:bg-[#0f172a] mt-16 mb-10 min-h-screen dark:text-white">
            <div className="w-full h-4"></div>
            <h1 className="text-center text-2xl m-4 font-bold">LARANGAN</h1>
            <input
                className="shadow m-4 block mx-auto outline outline-1 dark:outline-white p-1 w-1/3 dark:bg-[#0f172a] dark:text-white"
                type="text"
                name="cari"
                placeholder='cari'
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="w-5/6 lg:w-2/3 mx-auto dark:text-white">
                <div className="text-center font-bold">PNS dilarang:</div>
                {
                    larang[0] ? larang
                        .map((item) => (
                            <details className="flex flex-column outline outline-1 p-1 my-2 text-justify rounded bg-[#e4fab8] dark:bg-[#0f172a] divide-y-2 divide-black dark:divide-white duration-300">
                                <summary className="list-none flex cursor-pointer">
                                    <div className="self-center flex-none w-10">
                                        <img className="p-2" src={require('../assets/icons/' + item.ikon + '.svg')} alt={item.larangan} />
                                    </div>
                                    <div className="self-center">
                                        {item.larangan}
                                    </div>
                                </summary>
                                <p>Penjelasan: </p>
                                {item.penjelasan}
                                {item.uraian ? (item.uraian.map((detail) => (
                                    <details className="m-2 outline outline-1">
                                        <summary className="list-none cursor-pointer">
                                            <div className="my-1 p-2 ">
                                                {detail.poin}
                                            </div>
                                        </summary>
                                        <div className="p-2">
                                            <div>Penjelasan:</div>
                                            <div>{detail.detil ? detail.detil : "Cukup jelas"}</div>
                                        </div>
                                    </details>
                                ))) : ""}
                            </details>
                        )) : <div className="flex flex-column items-center outline outline-1 my-2 p-1 justify-center rounded bg-[#e4fab8] dark:bg-[#0f172a] divide-y-2 divide-black dark:divide-white duration-300">
                        Tidak ditemukan larangan tersebut
                    </div>
                }
            </div >
        </div>
    )
}

export default KomponenLarangan
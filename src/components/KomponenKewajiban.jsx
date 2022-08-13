import React, { useState } from 'react'
import { kewajiban } from '../data/kewajiban'
import { kewajibanLain } from '../data/kewajibanLain'

const KomponenKewajiban = () => {

    const [search, setSearch] = useState("")

    const wajib = kewajiban.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.kewajiban.toLowerCase().includes(search)
    })

    const wajibLain = kewajibanLain.filter((item) => {
        return search.toLowerCase() === ''
            ? item
            : item.kewajibanLain.toLowerCase().includes(search)
    })

    return (

        < div className="dark:bg-[#0f172a] mt-16 min-h-screen dark:text-white" >
            <div className="w-full h-4"></div>
            <h1 className="text-center text-2xl m-4 font-bold">KEWAJIBAN</h1>
            <input
                className="shadow m-4 block mx-auto outline outline-1 dark:outline-white p-1 w-1/3 dark:bg-[#0f172a] dark:text-white"
                type="text"
                name="cari"
                placeholder='cari kewajiban...'
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="dark:text-white w-5/6 lg:w-2/3 mx-auto" >
                <div className="text-center font-bold ">PNS wajib:</div>
                {wajib[0] ? wajib
                    .map((item) => (
                        <details className="flex flex-column items-center outline outline-1 my-2 p-1 text-justify rounded bg-[#BDD293] dark:bg-[#0f172a] divide-y-2 divide-black dark:divide-white duration-300">
                            <summary className="list-none flex cursor-pointer">
                                <div className="self-center flex-none w-10">
                                    <img className="p-2" src={require('../assets/icons/' + item.ikon + '.svg')} alt={item.kewajiban} />
                                </div>
                                <div className="self-center">{item.kewajiban}</div>
                            </summary>
                            <div className="mt-2">
                                <p>Penjelasan: </p>
                                {item.penjelasan}
                                {item.poinpenjelasan.map((poin) => (
                                    <ul><li>{poin}</li></ul>
                                ))}
                            </div>
                        </details>
                    )) : <div className="flex flex-column items-center outline outline-1 my-2 p-1 justify-center rounded bg-[#BDD293] dark:bg-[#0f172a] divide-y-2 divide-black dark:divide-white duration-300">
                    Tidak ditemukan kewajiban tersebut
                </div>}

                <div className="text-center font-bold">Selain memenuhi kewajiban di atas, PNS wajib:</div>
                {
                    wajibLain[0] ? wajibLain
                        .map((item) => (
                            <details className="flex flex-column items-center outline outline-1 my-2 p-1 text-justify rounded bg-[#BDD293] dark:bg-[#0f172a] divide-y-2 divide-black dark:divide-white duration-300">
                                <summary className="list-none flex cursor-pointer">
                                    <div className="self-center flex-none w-10">
                                        <img className="p-2" src={require('../assets/icons/' + item.ikon + '.svg')} alt={item.kewajibanLain} />
                                    </div>
                                    <div className="self-center">{item.kewajibanLain}</div>
                                </summary>
                                <div className="mt-2">
                                    <p>Penjelasan: </p>
                                    {item.penjelasan}
                                </div>
                            </details>
                        )) : <div className="flex flex-column items-center outline outline-1 my-2 p-1 justify-center rounded bg-[#BDD293] dark:bg-[#0f172a] divide-y-2 divide-black dark:divide-white duration-300">Tidak ditemukan kewajiban tersebut</div>
                }
            </div>
        </div >
    )
}

export default KomponenKewajiban

import React, { useState } from 'react'
import { templat } from '../data/templat'
import { Slide, Fade, Bounce } from "react-awesome-reveal";

const Templat = () => {

    const [input, setInput] = useState("")

    const filterTemplat = templat.filter((item) => {
        return input.toLowerCase() === ''
            ? item
            : item.judul.toLowerCase().includes(input.toLowerCase())
    })


    return (
        < div className="dark:bg-[#0f172a] mt-20 mb-10 min-h-screen dark:text-white" >
            <div className="w-5/6 mx-auto">
                <Slide direction="down">
                    <div className=" text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                        TEMPLAT SURAT
                    </div>
                </Slide>
                <Fade duration="3000">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        type="text"
                        placeholder="Cari templat..."
                        className="w-full p-1 md:w-1/3 block mx-auto shadow dark:bg-[#0f172a] dark:outline-white outline outline-1 rounded-lg"
                    />
                </Fade>
                <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-items justify-center">
                    {console.log(filterTemplat)}
                    {filterTemplat[0] ? filterTemplat.map((item) => (
                        <Bounce duration="2000">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"

                            >
                                <div className="outline outline-1 h-56 p-2 text-center shadow-lg shadow-amber-500 bg-amber-200 hover:bg-amber-700 hover:text-white hover:scale-105 hover:outline-black dark:bg-[#0f172a] dark:shadow-none dark:outline-white duration-300 cursor-pointer">{item.judul}</div>
                            </a>
                        </Bounce>
                    )) : <div>Pencarian tidak ditemukan</div>}
                </div>
            </div>
        </div >
    )
}

export default Templat
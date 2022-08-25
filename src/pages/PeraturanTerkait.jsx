import React from 'react'
import { daftarPeraturan } from '../data/daftarPeraturan'
import { Slide, Zoom } from "react-awesome-reveal";

const PeraturanTerkait = () => {

    return (
        <div className="mt-16 w-full lg:h-screen flex flex-col justify-center items-center lg:justify-evenly dark:bg-[#0f172a]">
            <Slide direction="down">
                <div className="m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                    PERATURAN TERKAIT
                </div>
            </Slide>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 m-6">
                {daftarPeraturan.map((item) => (
                    <Zoom duration="2000">
                        <a
                            className="flex min-h-full flex-col text-center justify-center items-centerh-32 w-full bg-[#D4FF80] hover:bg-slate-200 hover:scale-105 duration-300 dark:bg-[#0f172a] dark:text-white dark:outline dark:outline-white rounded-xl p-3"
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="text-lg font-bold">{item.peraturan}</div>
                            <div className="text-lg">tentang </div>
                            <div className="text-lg font-bold">{item.tentang}</div>
                        </a>
                    </Zoom>
                ))
                }
            </div>

        </div >
    )
}

export default PeraturanTerkait

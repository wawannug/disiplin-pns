import React from 'react'
import { daftarPeraturan } from '../data/daftarPeraturan'
import Slide from 'react-reveal/Slide';

const PeraturanTerkait = () => {

    return (
        <div className="mt- 16 w-full lg:h-screen flex flex-col justify-center items-center lg:justify-evenly dark:bg-[#0f172a]">
            <Slide top>
                <div className="m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                    PERATURAN TERKAIT
                </div>
            </Slide>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 m-6">
                {daftarPeraturan.map((item) => (
                    <Slide bottom>
                        <a
                            className="flex flex-col text-center justify-center items-centerh-32 w-full bg-[#D4FF80] dark:bg-[#0f172a] dark:text-white dark:outline dark:outline-white rounded-xl p-3"
                            href={item.link}
                            rel="noreferrer"
                        >
                            <div className="text-xl font-bold">{item.peraturan}</div>
                            <div className="text-xl">tentang </div>
                            <div className="text-xl font-bold">{item.tentang}</div>
                        </a>
                    </Slide>
                ))
                }
            </div>
        </div >
    )
}

export default PeraturanTerkait

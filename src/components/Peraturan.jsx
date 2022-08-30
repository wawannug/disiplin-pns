import React from 'react'
import { daftarPeraturan } from '../data/daftarPeraturan'
import { Slide, Fade } from "react-awesome-reveal";

const Peraturan = () => {


    return (
        <div className="mt-20 w-full lg:h-screen flex flex-col lg:flex-row justify-center items-center lg:justify-evenly bg-[#5A8020] dark:bg-[#0f172a]">
            <Slide direction="left">
                <div className="m-10 text-4xl md:text-6xl text-center font-Oranienbaum text-white">
                    PERATURAN TERKAIT
                </div>
            </Slide>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center gap-6 m-6">
                {daftarPeraturan.map((item) => (
                    <Fade duration="2000">
                        <a
                            className="min-h-full flex flex-col text-center justify-center items-centerh-32 w-full bg-[#D4FF80] hover:bg-[#718d38] dark:bg-[#0f172a] dark:text-white dark:outline dark:outline-white rounded-xl p-3"
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="text-md font-bold">{item.peraturan}</div>
                            <div className="text-md">tentang </div>
                            <div className="text-md font-bold">{item.tentang}</div>
                        </a>
                    </Fade>
                ))
                }
            </div>

        </div >
    )
}

export default Peraturan

import React from 'react'
import { Slide } from 'react-awesome-reveal'

const VideoPanduan = () => {
    return (
        <div className=" bg-gradient-to-bl from-[#5A8020] to-[#92cf36] dark:from-[#0f172a] dark:to-[#0f172a] w-full font-Montserrat-Regular lg:h-screen flex flex-col justify-evenly text-white">
            <Slide direction="down">
                <div className=" mt-16 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                    PANDUAN SITUS WEB
                </div>
            </Slide>
            <Slide direction="up">
                <iframe title="Panduan Situs Web" className="mt-10 mb-10 w-[320px] h-[180px] mx-auto  md:w-[560px] md:h-[315px] lg:w-[640px] lg:h-[360px] " src="https://www.youtube.com/embed/GcwxS4woFVw">
                </iframe>
            </Slide>
        </div>
    )
}

export default VideoPanduan

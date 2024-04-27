import React from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'

const HeroTitle = () => {
    return (
        <div className="text-white bg-gradient-to-b from-[#16478b] to-[#02275c] shadow-[#021125] shadow-lg dark:from-[#0f172a] dark:to-[#0f172a]">
            <div className="flex flex-col items-center justify-center w-full h-screen relative">
                <img className="absolute bottom-0 opacity-[0.18] object-cover h-192" alt="siluet"
                    src={require('../assets/images/siluet.png')} />
                <Zoom>
                    <div className='font-Oranienbaum font-bold text-5xl lg:text-8xl'>DISIPLIN PNS</div >
                </Zoom>
                <Fade delay="100">
                    <div className="w-5/6 md:w-3/5 mx-auto text-xl md:text-3xl text-center mt-16">Kesanggupan Pegawai Negeri Sipil untuk menaati kewajiban dan menghindari larangan yang ditentukan dalam peraturan perundang-undangan</div>
                </Fade>
            </div >
        </div>
    )
}

export default HeroTitle
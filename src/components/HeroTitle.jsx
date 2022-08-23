import React from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect';

const HeroTitle = () => {
    return (
        <div className="dark:text-white bg-[#a1c950] dark:bg-[#0f172a]">
            <div className="flex flex-col items-center justify-evenly w-full h-screen relative">
                <ReactTypingEffect
                    className='text-md text-center lg:text-xl'
                    text={["Selamat Datang", "Terima kasih sudah berkunjung"]}
                    speed="50"
                    eraseSpeed="50"
                />
                <Zoom>
                    <div className='font-Oranienbaum font-bold text-6xl lg:text-8xl'>DISIPLIN PNS</div >
                </Zoom>
                <Fade delay="100">
                    <div className="md:w-3/5 mx-auto text-xl md:text-3xl text-center mt-16">Kesanggupan Pegawai Negeri Sipil untuk menaati kewajiban dan menghindari larangan yang ditentukan dalam peraturan perundang-undangan</div>
                </Fade>
            </div >
        </div>
    )
}

export default HeroTitle

import React from 'react'
import Typed from "react-typed"

const HeroTitle = () => {
    return (
        <div className="dark:text-white bg-[#a1c950] dark:bg-[#0f172a]">
            <div className="flex flex-col items-center justify-center w-full h-screen relative">
                <div className='font-Oranienbaum font-bold text-6xl lg:text-8xl'>DISIPLIN PNS</div >
                <Typed
                    className='w-2/3 md:w-1/2 text-center text-xl md:text-2xl mt-16'
                    strings={[
                        "Kesanggupan Pegawai Negeri Sipil untuk menaati kewajiban dan menghindari larangan yang ditentukan dalam peraturan perundang-undangan",
                    ]}
                    typeSpeed={50}
                />
            </div >
        </div>
    )
}

export default HeroTitle

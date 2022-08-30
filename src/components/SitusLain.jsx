import React from 'react'
import { Slide } from 'react-awesome-reveal'

const SitusLain = () => {
    return (
        <div className="mb-10 lg:mb-0 dark:bg-[#0f172a] w-full font-Montserrat-Regular min-h-screen flex flex-col justify-evenly">
            <Slide direction="up">
                <div className=" mt-16 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                    SITUS WEB TERKAIT
                </div>
                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 w-5/6 mx-auto">
                    <div className=" outline outline-black outline-1 basis-1/3 hover:scale-110 duration-300 hover:rounded-2xl">
                        <a href="https://sites.google.com/view/upgeselon1djkn/"
                            target="_blank"
                            rel="noreferrer" >
                            <img src="https://drive.google.com/uc?export=view&id=15gmtn66syNTYrzH6Ulu_Gak4qmJPbGds" alt="informasi pengaduan gratifikasi" />
                        </a>
                    </div>
                    <div className="outline outline-black outline-1 basis-1/3 hover:scale-110 duration-300 hover:rounded-2xl">
                        <a href="http://sites.google.com/view/ziwbksekretariatdjkn/"
                            target="_blank"
                            rel="noreferrer" >
                            <img src="https://drive.google.com/uc?export=view&id=1pgBwtPhmx7RGtFRRZ-46bRFc1MpfNPD-" alt="zona integritas wbk" />
                        </a>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default SitusLain

import React from 'react'
import { Slide } from 'react-awesome-reveal'

const SitusLain = () => {
    return (
        <div className="mb-10 lg:mb-0 dark:bg-[#0f172a] w-full font-Montserrat-Regular min-h-screen flex flex-col justify-evenly">
            <Slide direction="up">
                <div className=" mt-16 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                    SITUS WEB TERKAIT
                </div>
            </Slide>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 w-2/3 mx-auto">
                <div className="shadow-xl shadow-slate-300 dark:shadow-none basis-1/3">
                    <Slide direction="left">

                        <a href="https://sites.google.com/view/upgeselon1djkn/"
                            target="_blank"
                            rel="noreferrer" >
                            <img className="hover:scale-110 duration-300 hover:rounded-2xl"
                                src={require('../assets/images/informasi-pengaduan-gratifikasi.png')}
                                alt="informasi pengaduan gratifikasi" />
                        </a>
                    </Slide>
                </div>
                <div className="shadow-xl shadow-slate-300 dark:shadow-none basis-1/3">
                    <Slide direction="right">
                        <a href="http://sites.google.com/view/ziwbksekretariatdjkn/"
                            target="_blank"
                            rel="noreferrer" >
                            <img className='hover:scale-110 duration-300 hover:rounded-2xl'
                                src={require('../assets/images/informasi-zona-integritas.png')} alt="zona integritas wbk" />
                        </a>
                    </Slide>
                </div>
            </div>

        </div >
    )
}

export default SitusLain

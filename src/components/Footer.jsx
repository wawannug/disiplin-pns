import React from 'react'
import { IconContext } from 'react-icons'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="flex  flex-col gap-6 lg:flex-row justify-between p-4 bg-[#a1c950] dark:bg-[#1C2C50] text-md dark:text-white dark:shadow-none shadow-[20px_20px_30px_15px_rgba(0,0,0,0,0,)] shadow-[#718d38]">
            <div className="mx-2">
                <div className='font-bold'>
                    Alamat Sekretariat DJKN
                </div>
                <div>
                    Gedung Syafruddin Prawiranegara II, Lantai 9 Selatan,
                </div>
                <div>
                    Jl. Lapangan Banteng Timur No. 2, Pasar Baru, Sawah Besar,
                </div>
                <div>
                    Jakarta Pusat, DKI Jakarta 10710
                </div>
            </div>
            <div className="mx-2 ">
                <div className='font-bold'>
                    Saluran Pengaduan DJKN
                </div>
                <div className="flex ">
                    <span className="w-32">Halo DJKN</span>
                    <span className="">: 150-991 / halodjkn.kemenkeu.go.id</span>
                </div>
                <div className="flex ">
                    <span className="w-32">Email</span>
                    <span className="">: pengaduan.djkn@kemenkeu.go.id</span>
                </div>
                <div className="flex ">
                    <span className="w-32">Wise Kemenkeu</span>
                    <span className="">: www.wise.kemenkeu.go.id</span>
                </div>

                <div className="flex ">
                    <span className="w-32">SP4N-LAPOR</span>
                    <span className="">: www.lapor.go.id</span>
                </div>

            </div>
            <div className="mx-2 ">
                <div className='font-bold'>
                    Sosial Media Sekretariat DJKN
                </div>
                <div className="flex gap-6 mt-2 ">
                    <IconContext.Provider value={{ size: 30 }}>
                        <a href="https://www.facebook.com/sekretariat.djkn.3" target="_blank" rel="noreferrer" >
                            <FaFacebook />
                        </a>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: 30 }}>
                        <a href="https://www.instagram.com/sekretariat.djkn/" target="_blank" rel="noreferrer" >
                            <FaInstagram />
                        </a>
                    </IconContext.Provider>
                    <IconContext.Provider value={{ size: 30 }}>
                        <a href="https://www.youtube.com/channel/UCLNaNkYP_lUaZbSfuH1xxng" target="_blank" rel="noreferrer" >
                            <FaYoutube />
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default Footer

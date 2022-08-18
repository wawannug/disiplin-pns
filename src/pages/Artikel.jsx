import React from 'react'
import { daftarArtikel } from '../data/daftarArtikel'
import { useNavigate } from 'react-router-dom'

const Artikel = () => {

    const navigate = useNavigate()

    return (
        <div className="mt-20 md:5/6 lg:w-2/3 mx-auto font-Montserrat-Regular md:h-screen dark:text-white dark:bg-[#1C2C50]">
            <div className="m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                ARTIKEL
            </div>
            <div className="grid grid-cols-3 gap-4 ">
                {daftarArtikel.map((item) => (
                    <div
                        onClick={() => navigate(item.link)}
                        className=" mx-auto outline outline-1">
                        <img src={require('../assets/images/' + item.gambar)} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Artikel

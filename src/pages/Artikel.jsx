import React from 'react'
import { daftarArtikel } from '../data/daftarArtikel'
import { useNavigate } from 'react-router-dom'
import Slide from 'react-reveal/Slide';

const Artikel = () => {

    const navigate = useNavigate()

    return (
        <div className="mt-16 w-5/6 lg:w-2/3 mx-auto lg:h-screen flex flex-col justify-center items-center lg:justify-evenly dark:bg-[#0f172a]">
            <Slide top>
                <div className="m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                    ARTIKEL
                </div>
            </Slide>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {daftarArtikel.map((item) => (
                    <Slide bottom>
                        <div
                            onClick={() => navigate(item.link)}
                            className=" mx-auto outline outline-1">
                            <img src={require('../assets/images/' + item.gambar)} alt={item.gambar} />
                        </div>
                    </Slide>
                ))}
            </div>

        </div>
    )
}

export default Artikel

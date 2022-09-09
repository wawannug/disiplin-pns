import React from 'react'
import { daftarArtikel } from '../data/daftarArtikel'
import { useNavigate } from 'react-router-dom'
import { Slide, JackInTheBox } from "react-awesome-reveal";

const Artikel = () => {

    const navigate = useNavigate()

    return (
        <div className="mt-20 mb-10 w-5/6 lg:w-2/3 mx-auto lg:min-h-screen flex flex-col justify-center items-center lg:justify-evenly dark:bg-[#0f172a]">
            <Slide direction="down">
                <div className="m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                    ARTIKEL
                </div>
            </Slide>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
                {daftarArtikel.map((item) => (
                    <JackInTheBox>
                        <div
                            onClick={() => navigate(item.link)}
                            className=" mx-auto outline outline-1 cursor-pointer shadow-xl ">
                            <img className="hover:scale-110 duration-200" src={item.gambar} alt={item.gambar} />
                        </div>
                    </JackInTheBox>
                ))}
            </div>

        </div>
    )
}

export default Artikel

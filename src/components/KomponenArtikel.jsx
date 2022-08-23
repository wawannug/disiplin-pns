import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { daftarArtikel } from '../data/daftarArtikel'
import { JackInTheBox, Slide } from "react-awesome-reveal";

const KomponenArtikel = () => {

    // useState untuk memindah array
    const [move, setMove] = useState(0)

    // Navigasi gambar artikel ke halaman yang diinginkan
    const navigate = useNavigate()

    // Menghandle tombol sebelum dan sesudah pada gambar
    const prevHandler = () => {
        if (move === 0) {
            setMove(move + daftarArtikel.length - 1);
        } else {
            setMove(move - 1)
        }
    }
    const nextHandler = () => {
        if (move === daftarArtikel.length - 1) {
            setMove(0)
        } else {
            setMove(move + 1);
        }
    }

    return (
        <div className="w-5/6 lg:h-screen flex flex-col md:flex-row-reverse mx-auto justify-center items-center lg:justify-evenly dark:bg-[#0f172a] m-10">
            <Slide direction="right">
                <div className="flex items-center justify-center md:basis-1/3 lg:w-1/6 m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                    ARTIKEL
                </div>
            </Slide>
            <JackInTheBox>
                <div className="md:basis-2/3 w-full md:w-2/3 lg:w-5/6 outline outline-1 outline-black relative" >
                    <img
                        className="cursor-pointer"
                        onClick={() => navigate(daftarArtikel[move].link)}
                        src={daftarArtikel[move].gambar}
                        alt={daftarArtikel[move.judul]} />
                    <button
                        className="absolute top-1/2 mx-1 px-3 bg-white rounded-full outline outline-1"
                        onClick={prevHandler}
                    >&#8249;</button>
                    <button
                        className="absolute top-1/2 right-0 mx-1 px-3 bg-white rounded-full outline outline-1"
                        onClick={nextHandler}
                    >&#8250;</button>
                </div>
            </JackInTheBox>
        </div>

    )
}

export default KomponenArtikel

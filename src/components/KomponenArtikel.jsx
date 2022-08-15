import React from 'react'

const KomponenArtikel = () => {
    return (
        <div className="w-full lg:h-screen flex flex-col md:flex-row-reverse justify-center items-center lg:justify-evenly dark:bg-[#0f172a] m-10">
            <div className="md:basis-1/3 lg:basis-1/2 m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                ARTIKEL
            </div>
            <div className="md:basis-2/3 lg:basis-1/2 w-2/3 h-96 outline outline-1 outline-black">
                Gambar
            </div>
        </div>

    )
}

export default KomponenArtikel

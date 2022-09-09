import React from 'react'

const Survei = () => {
    return (
        <>
            <iframe title="Survei" className="mt-20 mb-10 w-full" src="https://docs.google.com/forms/d/e/1FAIpQLScjxRSzygS45bq1isvaybwud-aDVLhbOUcbQrDbSHDRW1I03w/viewform?embedded=true" height="2000" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            <div className="p-4 lg:w-1/2  mx-auto mb-10">
                <a href="https://drive.google.com/drive/folders/1XRPsTByGTt86s3V9bbp-eNr3hFosN5u9?usp=sharing"
                    target="_blank"
                    rel="noreferrer">
                    <button className="bg-[#673ab7] text-white p-2 rounded-md">Lihat Laporan Hasil Survei</button>
                </a>
            </div>
        </>
    )
}

export default Survei

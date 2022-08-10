import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Toggle from '../mode/ThemeToggle'

const Navigation = () => {

    const [navbar, setNavbar] = useState(false)

    return (
        <nav className="w-full bg-sky-300 dark:bg-black p-2" >
            {/* Bungkus/Wrap logo dan link */}
            <div className="justify-between md:flex">
                {/* Mode Mobile */}
                <div className="flex justify-between items-center">
                    <div className="dark:text-white">
                        <Link to="/">
                            Beranda
                        </Link>
                    </div>

                    <div className="md:hidden items-center flex">
                        <Toggle className="md:hidden" />
                        <button
                            className=" hover:scale-110 duration-100"
                            onClick={() => setNavbar(!navbar)}
                        >
                            {navbar ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill="#666666"
                                        fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        fill="#666666"
                                        stroke="#666666"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`items-center md:flex gap-5 dark:text-white  ${navbar ? "block" : "hidden"}`}>
                    <div>
                        <Link to="kewajiban">
                            Kewajiban
                        </Link>
                    </div>
                    <div>
                        <Link to="larangan">
                            Larangan
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navigation

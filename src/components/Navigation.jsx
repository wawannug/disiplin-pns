import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Toggle from '../mode/ThemeToggle'
import Logo from '../assets/icons/DJKN.png'

const Navigation = () => {

    const [navbar, setNavbar] = useState(false)

    return (
        <nav className="w-full bg-[#a1c950] border-solid border-white dark:bg-[#1C2C50] duration-300 p-2 fixed top-0 z-10 font-bold shadow-md shadow-[#718d38] dark:shadow-none" >
            {/* Bungkus/Wrap logo dan link */}
            <div className="justify-between md:flex">
                {/* Mode Mobile */}
                <div className="flex justify-between items-center h-12">
                    <div className="dark:text-white">
                        <Link to="/">
                            <img src={Logo} className="h-8 bg-lime-200 dark:bg-[#1C2C50] shadow-xl  rounded p-1 " />
                        </Link>
                    </div>
                    <div className="flex">
                        <div className='md:hidden'>
                            <Toggle />
                        </div>
                        <div className="md:hidden items-center flex">
                            <button
                                className=" hover:scale-110 duration-100"
                                onClick={() => (
                                    setNavbar(!navbar)

                                )}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 fill-current text-gray-500 dark:text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path

                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 fill-current text-gray-500 dark:text-gray-400"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path

                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div
                        className={`md:items-center md:flex gap-5 dark:text-white  ${navbar ? "block" : "hidden"}`}
                        onClick={() => { setNavbar(!navbar) }}
                    >
                        <div className="h-9 md:h-full hover:bg-[#D4FF80] hover:p-1 rounded-xl">
                            <NavLink to="/bahasan">
                                Pokok Bahasan
                            </NavLink>
                        </div>
                        <div className="h-9 md:h-full hover:bg-[#D4FF80] hover:p-1 rounded-xl">
                            <NavLink to="/peraturan">
                                Peraturan Terkait
                            </NavLink>
                        </div>
                        <div className="h-9 md:h-full hover:bg-[#D4FF80] hover:p-1 rounded-xl">
                            <NavLink to="larangan">
                                Kuis
                            </NavLink>
                        </div>
                        <div className="h-9 md:h-full hover:bg-[#D4FF80] hover:p-1 rounded-xl">
                            <NavLink to="larangan">
                                Templat Surat
                            </NavLink>
                        </div>
                        <div className="h-9 md:h-full hover:bg-[#D4FF80] hover:p-1 rounded-xl">
                            <NavLink to="larangan">
                                Survei
                            </NavLink>
                        </div>
                        <div className="h-9 md:h-full hover:bg-[#D4FF80] hover:p-1 rounded-xl">
                            <NavLink to="artikel">
                                Artikel
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Toggle className="" />
                </div>
            </div>
        </nav >
    )
}

export default Navigation

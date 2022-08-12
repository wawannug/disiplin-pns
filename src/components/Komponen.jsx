import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Kewajiban from '../assets/icons/kewajiban.svg'
import Larangan from '../assets/icons/larangan.svg'
import Pejabat from '../assets/icons/pejabat.svg'
import Hukuman from '../assets/icons/hukuman.svg'
import TataCara from '../assets/icons/tata-cara.svg'
import Dokumentasi from '../assets/icons/dokumentasi.svg'

const Komponen = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full lg:h-screen flex flex-col justify-center lg:justify-evenly dark:text-white">
            <div className="m-10 text-4xl md:text-6xl text-center font-Oranienbaum dark:text-white">
                POKOK BAHASAN
            </div>
            <div className=" justify-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 m-4 lg:m-6 gap-4 lg:gap-6">
                <div
                    className="bg-[#E0E04F] dark:bg-[#0f172a] outline outline-[#607D25] cursor-pointer hover:scale-110 duration-500"
                    onClick={() => { navigate('kewajiban') }}>
                    <div className="flex justify-center">
                        <svg className="w-2/3 h-32 my-4 fill-current dark:text-white" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 77.695 72">
                            <g transform="translate(-14,-14)">
                                <polygon points="40.865 61.688 48.765 70.682 49.045 71 91.695 33.529 83.512 24.217 50.039 53.627 38.365 40.344 29.188 48.405" />
                            </g>
                            <g transform="translate(-14,-14)">
                                <path d="m77 77h-54v-54h54v1.541l7.47-6.547c-1.614-2.408-4.354-3.994-7.47-3.994h-54c-4.97 0-9 4.03-9 9v54c0 4.969 4.03 9 9 9h54c4.971 0 9-4.031 9-9v-33.143l-9 7.907v25.236z" />
                            </g>
                        </svg>
                        {/* <img src={Kewajiban} className="h-32 my-4" /> */}
                    </div>
                    <div className="mt-4 outline outline-1 h-20 outline-[#607D25] m-2 flex items-center justify-center text-center">
                        Kewajiban
                    </div>
                </div>
                <div
                    className="bg-[#E0E04F] dark:bg-[#0f172a] outline outline-[#607D25] cursor-pointer hover:scale-110 duration-500"
                    onClick={() => { navigate('kewajiban') }}>
                    <div className="flex justify-center ">
                        <svg className="w-2/3 h-32 my-4 fill-current dark:text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enable-background="new 0 0 512 512">
                            <g>
                                <path d="M412.719,54.022C369.356,20.299,315.059,0,256,0C114.844,0,0,114.844,0,256c0,59.058,20.299,113.353,54.021,156.715   L412.719,54.022z" />
                                <path d="M457.97,99.271L99.268,457.967C142.633,491.696,196.936,512,256,512c141.156,0,256-114.844,256-256   C512,196.936,491.698,142.636,457.97,99.271z" />
                            </g>
                        </svg>
                        {/* <img src={Larangan} className="h-32 my-4" /> */}
                    </div>
                    <div className="mt-4 outline outline-1 h-20 outline-[#607D25] m-2  flex items-center justify-center text-center">
                        Larangan
                    </div>
                </div>
                <div
                    className="bg-[#E0E04F] dark:bg-[#0f172a] outline outline-[#607D25] cursor-pointer hover:scale-110 duration-500"
                    onClick={() => { navigate('kewajiban') }}>
                    <div className="flex justify-center">
                        <svg className="w-2/3 h-32 my-4 fill-current dark:text-white" version="1.0" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1098.000000 1280.000000"
                            preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                            >
                                <path d="M2655 12783 c-132 -48 -211 -161 -209 -303 1 -93 19 -134 113 -251 l69 -85 -137 -111 c-141 -114 -374 -304 -1275 -1038 -290 -236 -531 -431 -536
-433 -4 -2 -40 36 -80 83 -79 94 -124 129 -196 151 -188 57 -383 -76 -401 -274 -8 -90 15 -156 89 -249 48 -60 1462 -1798 1947 -2392 47 -57 104 -116
128 -132 202 -127 466 7 481 246 6 96 -19 157 -109 269 -69 85 -71 89 -53 106 38 36 676 552 687 555 9 3 1756 -2130 1859 -2268 16 -22 10 -31 -486 -640
-276 -339 -505 -620 -509 -623 -3 -4 -25 10 -48 30 -23 19 -46 33 -50 30 -5 -2 -262 -316 -572 -697 -310 -381 -1078 -1324 -1708 -2097 -629 -773 -1241
-1524 -1360 -1670 -119 -146 -227 -285 -242 -310 -85 -146 -71 -352 34 -492 172 -231 496 -251 698 -43 39 40 1876 2292 3569 4375 146 179 272 333 280 343
15 17 13 21 -28 56 l-44 38 25 34 c94 123 892 1094 899 1094 7 0 805 -971 899 -1094 l25 -34 -44 -38 -44 -38 40 -48 c22 -26 157 -192 300 -368 813 -1000
3323 -4081 3417 -4195 128 -154 191 -209 274 -240 168 -63 357 -22 484 105 121 121 165 280 123 440 -22 88 -48 126 -263 390 -107 132 -726 893 -1376
1690 -650 798 -1412 1734 -1694 2080 -282 347 -532 652 -555 678 l-41 49 -43 -38 c-37 -31 -45 -35 -56 -23 -7 8 -230 282 -496 609 -266 327 -489 602 -496
611 -12 13 88 140 747 950 419 514 839 1029 933 1146 94 117 176 210 183 208 11 -3 649 -519 687 -555 18 -17 16 -21 -53 -106 -90 -112 -115 -173 -109 -269
15 -239 279 -373 481 -246 24 16 81 75 128 132 485 594 1899 2332 1947 2392 74 93 97 159 89 249 -18 198 -213 331 -401 274 -72 -22 -117 -57 -196 -151
-40 -47 -76 -85 -80 -83 -5 2 -246 197 -536 433 -901 734 -1134 924 -1275 1038 l-137 111 69 85 c96 120 113 157 113 256 0 96 -25 156 -92 223 -64 64
-120 87 -217 87 -67 0 -89 -4 -135 -27 -30 -15 -71 -44 -91 -65 -20 -21 -335 -405 -700 -853 -364 -448 -820 -1007 -1012 -1243 -210 -259 -358 -448 -372
-480 -51 -108 -25 -256 60 -341 70 -69 124 -91 225 -91 125 0 177 28 278 149 42 50 81 91 87 90 10 -1 640 -508 688 -554 17 -16 14 -21 -71 -126 -49 -60
-448 -550 -887 -1089 -439 -539 -801 -980 -805 -980 -4 0 -406 490 -894 1089 -849 1042 -886 1090 -869 1106 48 46 678 553 688 554 6 1 45 -40 87 -90 101
-121 153 -149 278 -149 101 0 155 22 225 91 57 57 85 131 85 224 0 58 -5 77 -32 129 -18 34 -166 225 -329 424 -162 199 -614 754 -1004 1232 -389 479 -724
887 -744 908 -80 84 -220 118 -326 80z"/>
                            </g>
                        </svg>
                        {/* <img src={Hukuman} className="h-32 my-4" /> */}
                    </div>
                    <div className="mt-4 outline outline-1 h-20 outline-[#607D25] m-2 flex items-center justify-center text-center">
                        Tingkat dan Jenis Hukuman
                    </div>
                </div>
                <div
                    className="bg-[#E0E04F] dark:bg-[#0f172a] outline outline-[#607D25] cursor-pointer hover:scale-110 duration-500"
                    onClick={() => { navigate('kewajiban') }}>
                    <div className="flex justify-center">
                        <svg
                            className="w-2/3 h-32 my-4 fill-current dark:text-white"
                            id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 122.88 116.02">
                            <defs><style>.cls-1</style></defs><title>person</title>
                            <path class="cls-1" d="M45.41,69.63c.35-2.91-8.3-14.06-9.88-19.4-3.39-5.38-4.59-13.94-.9-19.63,1.47-2.26.84-4.22.84-7.35,0-31,54.27-31,54.27,0,0,3.92-.89,4.84,1.22,7.93,3.55,5.15,1.73,14.29-1.27,19.07-1.93,5.61-11,16.22-10.37,19.4.57,15.89-34,15.38-33.91,0v0Zm19.78,27.5H67.1A3.13,3.13,0,0,0,70.22,94V89a3.12,3.12,0,0,0-3.12-3.12H55.79A3.13,3.13,0,0,0,52.67,89V94a3.14,3.14,0,0,0,3.12,3.12h1.94L54,116H68.76L65.19,97.13ZM0,116C1.47,97-2.26,97.79,13.65,91.84A122.7,122.7,0,0,0,36,80.54L49.6,116Zm87.54-37.1a91.08,91.08,0,0,0,20.61,10.29C123,94.15,123,94.84,122.86,116H73.45l14.09-37.1Z" />
                        </svg>
                        {/* <img src={Pejabat} className="h-32 my-4" /> */}
                    </div>
                    <div className="mt-4 outline outline-1 h-20 outline-[#607D25] m-2 flex items-center justify-center text-center">
                        <p>Pejabat yang Berwenang Menghukum</p>
                    </div>
                </div>
                <div
                    className="bg-[#E0E04F] dark:bg-[#0f172a] outline outline-[#607D25] cursor-pointer hover:scale-110 duration-500"
                    onClick={() => { navigate('kewajiban') }}>
                    <div className="flex justify-center">
                        <svg className="w-2/3 h-32 my-4 fill-current dark:text-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            enable-background="new 0 0 24 24"><path d="M8.5,6H6.7C8.2,4.7,10,4,12,4c0.3,0,0.6,0,0.9,0.1c0,0,0,0,0,0c0.5,0.1,1-0.3,1.1-0.9c0.1-0.5-0.3-1-0.9-1.1C12.7,2,12.4,2,12,2C9.6,2,7.3,2.9,5.5,4.4V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S9.1,6,8.5,6z M7,14.5c-0.6,0-1,0.4-1,1v1.8C4.7,15.8,4,14,4,12c0-0.3,0-0.6,0.1-0.9c0,0,0,0,0,0c0.1-0.5-0.3-1-0.9-1.1c-0.5-0.1-1,0.3-1.1,0.9C2,11.3,2,11.6,2,12c0,2.4,0.9,4.7,2.4,6.5H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.3,0,0.6-0.2,0.8-0.4c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1v-4C8,14.9,7.6,14.5,7,14.5z M21,5.5c0.6,0,1-0.4,1-1s-0.4-1-1-1h-4c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.3,0.1c0,0,0,0,0,0c-0.1,0.1-0.2,0.1-0.2,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1-0.1,0.2-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1v4c0,0.6,0.4,1,1,1s1-0.4,1-1V6.7c1.3,1.4,2,3.3,2,5.3c0,0.3,0,0.6-0.1,0.9c-0.1,0.5,0.3,1,0.9,1.1c0,0,0.1,0,0.1,0c0.5,0,0.9-0.4,1-0.9c0-0.4,0.1-0.7,0.1-1.1c0-2.4-0.9-4.7-2.4-6.5H21z M20.3,16.5c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0,0,0c0,0,0,0,0,0c-0.1-0.1-0.2-0.1-0.3-0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.8c-1.4,1.3-3.3,2-5.3,2c-0.3,0-0.6,0-0.9-0.1c0,0,0,0,0,0c-0.5-0.1-1,0.3-1.1,0.9s0.3,1,0.9,1.1c0.4,0,0.7,0.1,1.1,0.1c2.4,0,4.7-0.9,6.5-2.4V21c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C20.5,16.8,20.4,16.6,20.3,16.5C20.3,16.5,20.3,16.5,20.3,16.5z" />
                        </svg>
                        {/* <img src={TataCara} className="h-32 my-4" /> */}
                    </div>
                    <div className="mt-4 outline outline-1 outline-[#607D25] m-2 h-20 flex items-center justify-center text-center">
                        <p>Tata Cara Pemeriksaan</p>
                    </div>
                </div>
                <div
                    className="bg-[#E0E04F] dark:bg-[#0f172a] outline outline-[#607D25] cursor-pointer hover:scale-110 duration-500"
                    onClick={() => { navigate('kewajiban') }}>
                    <div className="flex justify-center">
                        <svg className="w-2/3 h-32 my-4 fill-current dark:text-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M640 170.666667H256v682.666666h512V298.666667h-128V170.666667zM256 85.333333h426.666667l170.666666 170.666667v597.333333a85.333333 85.333333 0 0 1-85.333333 85.333334H256a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334z m85.333333 384h341.333334v85.333334H341.333333v-85.333334z m0 170.666667h341.333334v85.333333H341.333333v-85.333333z" /></svg>
                        {/* <img src={Dokumentasi} className="h-32 my-4" /> */}
                    </div>
                    <div className="mt-4 outline outline-1 outline-[#607D25] m-2 h-20 flex items-center justify-center text-center">
                        <p>Berlakunya Hukuman Disiplin</p>
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Komponen

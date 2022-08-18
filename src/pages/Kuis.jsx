import React, { useState, useMemo } from 'react'
import { kuis } from '../data/kuis'



const Kuis = () => {

    const level = useMemo(
        () =>
            [
                { id: 1, level: "Level 1" },
                { id: 2, level: "Level 2" },
                { id: 3, level: "Level 3" },
                { id: 4, level: "Level 4" },
                { id: 5, level: "Level 5" },
                { id: 6, level: "Level 6" },
                { id: 7, level: "Level 7" },
                { id: 8, level: "Level 8" },
                { id: 9, level: "Level 9" },
                { id: 10, level: "Level 10" },
                { id: 11, level: "Level 11" },
                { id: 12, level: "Level 12" },
                { id: 13, level: "Level 13" },
                { id: 14, level: "Level 14" },
                { id: 15, level: "Level 15" },
            ].reverse(),
        []
    );



    const [number, setNumber] = useState(0);

    const answerSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        < div className="dark:bg-[#0f172a] mt-16 min-h-screen dark:text-white" >
            <div className="flex">
                <div className="bg-[url('assets/images/background.jpg')] w-full md:w-2/3 h-screen bg-center">
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div className='items-center justify-center text-center flex mx-auto'>
                    <ul className="">
                        {level.map((item) => (
                            <li>{item.level}</li>
                        ))}

                    </ul>
                </div>
            </div >
        </div >
    )
}

export default Kuis

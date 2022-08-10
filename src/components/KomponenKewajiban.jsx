import React from 'react'
import { kewajiban } from '../data/kewajiban'
import { kewajibanLain } from '../data/kewajibanLain'

const KomponenKewajiban = () => {

    return (
        <div className="dark:text-white w-5/6 lg:w-2/3 mx-auto " >
            <h1>PNS wajib:</h1>
            {kewajiban.map((item) => (
                <details className="flex flex-column items-center outline outline-1 my-2 p-1 text-justify rounded bg-sky-200 dark:bg-black divide-y-2 divide-black duration-300">
                    <summary className="list-none flex cursor-pointer">
                        <div className="flex-none w-10">
                            <img className="p-2" src={require('../assets/icons/' + item.ikon + '.svg')} alt={item.kewajiban} />
                        </div>
                        <div>{item.kewajiban}</div>
                    </summary>
                    <p className="mt-2">{item.penjelasan}</p>
                </details>
            ))}

            <h1>Selain memenuhi kewajiban di atas, PNS wajib:</h1>
            {kewajibanLain.map((item) => (
                <div className="flex flex-column items-center outline outline-1 my-2 p-1 text-justify rounded">
                    <div className="flex-none w-10">
                        <img className="p-2" src={require('../assets/icons/' + item.ikon + '.svg')} alt={item.kewajibanLain} />
                    </div>
                    <div>{item.kewajibanLain}</div>
                </div>
            ))}
        </div>
    )
}

export default KomponenKewajiban

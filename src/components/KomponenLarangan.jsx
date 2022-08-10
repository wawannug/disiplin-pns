import React from 'react'
import { larangan } from '../data/larangan'

const KomponenLarangan = () => {
    return (
        <div className="w-5/6 lg:w-2/3 mx-auto">
            <h1>PNS dilarang:</h1>
            {larangan.map((item) => (
                <div className="flex flex-column outline outline-1 p-1 my-2 text-justify rounded">
                    <div className="flex-none w-10">
                        <img className="p-2" src={require('../assets/icons/' + item.ikon + '.svg')} alt={item.larangan} />
                    </div>
                    <div>
                        {item.larangan}
                        {item.uraian.map((detail) => (
                            <div className="my-2 p-2 outline outline-1">{detail}</div>
                        ))}
                    </div>


                </div>
            ))
            }
        </div >
    )
}

export default KomponenLarangan
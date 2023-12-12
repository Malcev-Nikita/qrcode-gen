'use client'

import React, {useState} from 'react';
 
function Filling(number, multiple) {
    let filling = number;

    while (filling.length % multiple != 0) {
        filling += '0';
    }

    return filling;
} 

function StringToBin(string) {
    let result = [];
    const encoder = new TextEncoder('utf-8')

    encoder.encode(string).forEach(element => {
        console.log(element.toString(2))
        result.push(Filling(element.toString(2), 8))
    }); 

    return result;
}

export default function QrCodeGen() {
    const [stringGen, setStringGen] = useState('');

    return (
        <div className='w-[100%] flex justify-center align-middle flex-col'>
            <div className='flex justify-center gap-4'>
                <label className='text-white'>Поле для ввода данных для перевода в QrCode</label>
                <input className='text-black' name="STRING_GEN" onChange={(e) => setStringGen(e.target.value)} value={stringGen}/>
            </div>

            <div className='flex flex-wrap'>
                <span className='text-white flex flex-wrap'>
                    { StringToBin(stringGen).map(element => {
                        return element + ' ';
                    }) }
                </span>
            </div>
        </div>
    )
}
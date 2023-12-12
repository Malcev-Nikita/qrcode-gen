'use client'

import React, {useState} from 'react';


function CorrectString(string) {
    const correctSimbol = [['а','a'],['б','b'],['в','v'],['г','g'],['д','d'],['е','e'],['ё','yo'],['ж','zh'],['з','z'],['и','i'],[ 'й', 'j' ],[ 'к', 'k' ],[ 'л', 'l' ],[ 'м', 'm' ],[ 'н', 'n' ],[ 'о', 'o' ],[ 'п', 'p' ],[ 'р', 'r' ],[ 'с', 's' ],[ 'т', 't' ],[ 'у', 'u' ],[ 'ф', 'f' ],[ 'х', 'h' ],[ 'ц', 'c' ],[ 'ч', 'ch' ],[ 'ш', 'sh' ],[ 'щ', 'shch' ],[ 'ъ', '' ],[ 'ы', 'y' ],[ 'ь', '' ],[ 'э', 'e' ],[ 'ю', 'yu' ],[ 'я', 'ya' ]];

    let correctString = string;
    correctString = correctString.toLowerCase();
    correctString = correctString.replaceAll(' ', '_');

    for (let index = 0; index < correctSimbol.length; index++) {
        correctString = correctString.replaceAll(correctSimbol[index][0], correctSimbol[index][1]);
    }

    return correctString;
} 

function StringToBin(string) {
    const symbolToNumber = [
        ['0','0'],
        ['0','0'],
    ]

    let correctString = CorrectString(string);

    console.log(correctString);
}

export default function QrCodeGen() {
    const [stringGen, setStringGen] = useState('');

    return (
        <div className=''>
            <div className='flex gap-4'>
                <label className='text-white'>Поле для ввода данных для перевода в QrCode</label>
                <input className='text-black' name="STRING_GEN" onChange={(e) => setStringGen(e.target.value)} value={stringGen}/>
            </div>

            <div>
                <span className='text-white'>
                    { StringToBin(stringGen) }
                </span>
            </div>
        </div>
    )
}
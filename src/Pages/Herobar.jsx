import React from 'react';  
import bg from '../assets/bg.jpg';  
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';

export default function HeroBar() {  
    return (  
        <>  
            <div className='bg-red-500 p-1 shadow-2xl h-2/5 w-full flex flex-nowrap justify-center items-center mt-2'>
                <div className='bg-green-400 rounded-sm h-52 w-full flex flex-row justify-between items-center'>
                    <div className='h-auto w-auto bg-red-500'><BsChevronCompactLeft className='text-xl'/></div>
                    <div className='h-auto w-auto bg-red-500'><BsChevronCompactRight className='text-xl' /></div>
                </div>
            </div>
        </>  
    );  
}
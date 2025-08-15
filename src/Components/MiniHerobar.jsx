import React from 'react';
import bg from '../assets/bg.jpg';
import { PiDotOutlineDuotone } from 'react-icons/pi';

export default function MiniHeroBar() {
    return (
        <>
            <div className='bg-red-500 p-1 h-1/5 w-full flex flex-nowrap justify-center items-center'>
                <div className='bg-white rounded-sm h-32 w-full flex justify-center items-center'>
                    <h1 className='text-4xl'>Deal's 40% - 60% Off</h1>
                </div>
            </div>
        </>
    );
}
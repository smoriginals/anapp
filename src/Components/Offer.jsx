import React from 'react';
import bg from '../assets/bg.jpg';
import { PiDotOutlineDuotone } from 'react-icons/pi';

export default function Offer() {
    return (
        <>
            <div className='bg-red-500 p-1 h-96 w-full flex justify-center items-center mt-2'>
                <div className='bg-white rounded-sm h-full w-full flex justify-center items-center'>
                    <h1 className='text-4xl'>90% OFF</h1>
                </div>
            </div>
        </>
    );
}
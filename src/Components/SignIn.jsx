import React from 'react';
import { PiDotOutlineDuotone } from 'react-icons/pi';

export default function SignIn() {
    return (
        <>
            <div className='bg-red p-1 h-1/5 w-full flex flex-nowrap justify-center items-center'>
                <div className='bg-white rounded-sm h-32 w-full flex flex-col justify-center items-center'>
                    <button className='bg-gray-700 px-2 py-1 text-md rounded-sm text-white'>SignIn</button>
                    <p className='text-gray-500 text-sm px-1 py-1'>Sign in to Get Recommandation</p>
                </div>
            </div>
        </>
    );
}
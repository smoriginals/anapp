import React from 'react';
import { PiDotOutlineDuotone } from 'react-icons/pi';

export default function SignIn() {
    return (
        <>
            <div className='bg-red flex h-1/5 w-full flex-nowrap items-center justify-center p-1'>
                <div className='flex h-32 w-full flex-col items-center justify-center rounded-sm bg-white'>
                    <button className='text-md rounded-sm bg-gray-700 px-2 py-1 text-white'>SignIn</button>
                    <p className='px-1 py-1 text-sm text-gray-500'>Sign in to Get Recommandation</p>
                </div>
            </div>
        </>
    );
}
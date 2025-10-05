import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function SignIn() {
    const navigate = useNavigate();
    return (
        <>
            <div className='bg-red flex h-1/5 w-full flex-nowrap items-center justify-center p-1'>
                <div className='flex h-32 w-full flex-col items-center justify-center rounded-sm bg-white'>
                    <button className='text-md rounded-full bg-orange-500 px-6 py-1 text-white' onClick={() => { navigate('/signup')} }>SignIn</button>
                    <p className='px-1 py-1 text-sm font-medium text-gray-800'>Sign in to Get Recommandation</p>
                </div>
            </div>
        </>
    );
}
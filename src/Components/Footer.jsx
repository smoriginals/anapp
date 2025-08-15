import React from 'react';

export default function Footer() {
    return (
        <>
            <div className='h-full w-full flex flex-col justify-center items-center'>

                <div className='h-2/4 w-full bg-gray-500 p-2 flex justify-center items-center'>
                    ▴ Go to Top ▴
                </div>

                <div className='h-2/4 w-full bg-gray-700 p-2 gap-2 flex flex-row justify-center items-center'>
                    <div className='h-1/4 w-full bg-green-500 flex flex-col justify-center items-ceter p-2 gap-4 text-md'>
                        <a href='/'>ABCD</a>
                        <a href='/'>ABCD</a>
                        <a href='/'>ABCD</a>
                        <a href='/'>ABCD</a>
                        <a href='/'>ABCD</a>
                    </div>
                    <div className='h-1/4 w-full bg-red-500 flex flex-col justify-center items-ceter p-2 gap-4 text-md'>
                        <a href='/'>XYZ</a>
                        <a href='/'>XYZ</a>
                        <a href='/'>XYZ</a>
                        <a href='/'>XYZ</a>
                        <a href='/'>XYZ</a>
                    </div>
                </div>

                <div className='h-2/4 w-full bg-gray-500 p-2 flex flex-col justify-center items-center'>
                    <div className='flex flex-row justify-evenly items-center bg-yellow-500 gap-2'>
                        <div className='h-auto w-auto px-2 bg-red-400'>Country</div>
                        <div className='h-auto w-auto px-2 bg-red-400'>Language</div>
                        <div className='h-auto w-auto px-2 bg-red-400'>Currency</div>
                    </div>

                    <div className='flex flex-row justify-evenly items-center bg-red-500 gap-2'>
                        <h1 className='text-xl p-2'>Already have an account? SignUp</h1>
                    </div>


                    <div className='flex flex-row justify-evenly items-center bg-red-500 gap-2'>
                        <h1 className='text-xl p-2'>XYZ</h1>
                        <h1 className='text-xl p-2'>XYZ</h1>
                        <h1 className='text-xl p-2'>XYZ</h1>
                        <h1 className='text-xl p-2'>XYZ</h1>
                        <h1 className='text-xl p-2'>XYZ</h1>
                    </div>


                </div>

            </div>
        </>
    )
}
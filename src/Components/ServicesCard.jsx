import React from 'react';
import delivery from '../assets/delivery.jpg';
export default function ServicesCard() {
    return (
        <>
            <div>
                <div className='h-2/5 w-full p-2 py-3 my-2 flex justify-center items-center flex-col bg-red-800 pb-1 shadow-xl rounded-md '>
                    <div><img src={delivery }className='h-full w-full overflow-hiddern relative top-0 left-0 rounded-t-md'/></div>
                    <div className='bg-white rounded-b-md'>
                        <p className='text-xl px-2 font-bold'>Title</p>
                        <p className='text-sm text-gray-500 pb-2 px-2'>We deliver plants to your doorstep and help with setup & potting</p>
                    </div>
                </div>
            </div>
        </>
    )
}
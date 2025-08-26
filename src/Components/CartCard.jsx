import React from "react";
import { BiHeartCircle } from 'react-icons/bi';
import png from '../assets/a2.png';

export default function CartCard() {
    return (
        <>
            <div className='flex h-full items-start justify-start p-2'>
                <div className='shadow-xl relative top-1 flex h-52 w-full flex-row justify-evenly rounded-md bg-gray-100 p-2 gap-2'>
                    <div className='h-42 w-60 flex flex-col justify-center items-center'>
                        <div><img src={png} className='h-40 w-auto' /></div>
                        <div className='h-auto w-full flex flex-row px-2 justify-between items-center'>
                            <input type='number' placeholder='0' className='h-6 w-8 rounded-md border border-gray-300 text-center font-bold text-md text-gray-600 relative top-1' />
                            <BiHeartCircle className='text-2xl text-red-500 font-bold relative top-1' />
                        </div>
                    </div>
                    <div className='h-42 w-full '>
                        <div>
                            <h1 className='px-2 pt-2 text-xl font-bold'>Product Title</h1>
                            <p className='text-gray-500 text-sm px-2'>To drowsy suffice fathers by deeds fulness or for aisle cell later men that not by degree sooth the could</p>
                        </div>
                        <div>
                            <h1 className='px-2 text-xl font-bold'>$4999.00<span className='line-through text-red-400 px-3 text-sm'>$8999.00</span></h1>
                            <p className='text-sm px-2'>Remove</p>
                        </div>
                        <div className='px-2  h-6 flex justify-start items-center'>
                            Rating:
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
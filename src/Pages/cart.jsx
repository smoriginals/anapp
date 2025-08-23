import React from "react";
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { BiHeartCircle } from 'react-icons/bi';
import png from '../assets/a2.png';

export default function Cart() {
    return (
        <>
    
            <div className='bg-green-600 py-6'>
                <div className='relative left-0 top-2 flex items-center justify-center text-4xl'>
                    <HiOutlineShoppingBag className='shadow-xl' />
                    <h1>My Cart</h1>
                </div>
            </div>
            <div className='flex h-full items-start justify-start bg-red-400 p-2'>
                <div className='relative top-1 flex h-52 w-full flex-row justify-evenly rounded-md bg-gray-200 p-2 gap-2'>
                    <div className='h-42 w-60 bg-blue-500 flex flex-col justify-center items-center'>
                        <div><img src={png} className='h-40 w-auto' /></div>
                        <div className='h-auto w-full flex flex-row p-1 px-2 justify-between items-center bg-red-400'>
                            <input type='number' placeholder='...'className='h-6 w-8 rounded-md border border-gray-500 text-center font-bold text-md text-gray-500'/>
                            <BiHeartCircle className='text-2xl text-white font-bold' />
                        </div>
                    </div>
                    <div className='h-42 w-full bg-green-500'>
                        <div>
                            <h1 className='px-2 pt-2 text-xl font-bold'>Product Title</h1>
                            <p className='text-gray-300 text-sm px-2'>To drowsy suffice fathers by deeds fulness or for aisle cell later men that not by degree sooth the could</p>
                        </div>
                        <div>
                            <h1 className='px-2 text-xl font-bold'>$4999.00<span className='line-through px-3 text-sm'>$8999.00</span></h1>
                            <p className='text-sm px-2'>Remove</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

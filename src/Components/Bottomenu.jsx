import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { LuLoaderPinwheel } from 'react-icons/lu';
import { IoCartOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Assuming you have a global CSS file for styles'
export default function Bottomenu({ isToggled }) {

    const navigate = useNavigate();

    return (
        <>
            {/* Use either fixed or sticky,own choice */  }
            <div className={`sticky bottom-0 left-0 z-50 ${isToggled?'rounded-b-xl':'rounded-none'} flex h-14 w-full items-center justify-between bg-gray-800 px-2`}>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <AiFillHome className='anime rounded-full text-xl text-gray-500 hover:text-cyan-500' onClick={() => { navigate('/') }} />
                </div>
                    
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <FaHeart className='anime rounded-full text-xl text-gray-500 hover:text-cyan-500' onClick={() => { navigate('/wishlist') }} />
                </div>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <LuLoaderPinwheel className='anime text-4xl text-orange-500 hover:text-cyan-500' />
                </div>

                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <IoCartOutline className='anime rounded-full text-xl text-gray-500 hover:text-cyan-500' onClick={() => { navigate('/cart') }} />
                </div>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <FaUser className='anime rounded-full text-xl text-gray-500 hover:text-cyan-500' onClick={() => { navigate('/login') }} />
                </div>
            </div>
        </>
    )
}
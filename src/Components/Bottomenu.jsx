import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { LuLoaderPinwheel } from 'react-icons/lu';
import { IoCartOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import '../index.css'; // Assuming you have a global CSS file for styles'
export default function Bottomenu() {
    return (
        <>
            <div className='fixed bottom-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-gray-100 px-2'>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <AiFillHome src={AiFillHome} alt="Home Icon" className='animeate rounded-full object-cover text-2xl text-gray-500 hover:text-cyan-500' />
                </div>
                    
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <FaHeart src={FaHeart} alt="Heart Icon" className='animeate rounded-full object-cover text-2xl text-gray-500 hover:text-cyan-500' />
                </div>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <LuLoaderPinwheel src={LuLoaderPinwheel} alt="Explore Icon" className='animeate rounded-full object-cover text-4xl text-orange-500 hover:text-cyan-500' />
                </div>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <IoCartOutline src={IoCartOutline} alt="Cart Icon" className='animeate rounded-full object-cover text-2xl text-gray-500 hover:text-cyan-500' />
                </div>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <FaUser src={FaUser} alt="USer Icon" className='animeate rounded-full object-cover text-2xl text-gray-500 hover:text-cyan-500' />
                </div>
            </div>
        </>
    )
}
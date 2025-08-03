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
            <div className='border border-solid border-gray-200 fixed bottom-0 left-0 flex h-16 w-full items-center justify-between bg-white px-2 z-50'>
                <div className='h-[50px] w-[50px] rounded-full  flex flex-nowrap justify-center items-center'>
                    <AiFillHome src={AiFillHome} alt="Home Icon" className='text-gray-500 text-2xl object-cover rounded-full animeate hover:text-cyan-500' />
                </div>
                    
                <div className='h-[50px] w-[50px] rounded-full  flex flex-nowrap justify-center items-center'>
                    <FaHeart src={FaHeart} alt="Heart Icon" className='text-gray-500 text-2xl object-cover rounded-full animeate hover:text-cyan-500' />
                </div>
                <div className='h-[50px] w-[50px] rounded-full  flex flex-nowrap justify-center items-center'>
                    <LuLoaderPinwheel src={LuLoaderPinwheel} alt="Explore Icon" className='text-orange-500 text-4xl object-cover rounded-full animeate hover:text-cyan-500' />
                </div>
                <div className='h-[50px] w-[50px] rounded-full  flex flex-nowrap justify-center items-center'>
                    <IoCartOutline src={IoCartOutline} alt="Cart Icon" className='text-gray-500 text-2xl object-cover rounded-full animeate hover:text-cyan-500' />
                </div>
                <div className='h-[50px] w-[50px] rounded-full  flex flex-nowrap justify-center items-center'>
                    <FaUser src={FaUser} alt="USer Icon" className='text-gray-500 text-2xl object-cover rounded-full animeate hover:text-cyan-500' />
                </div>
            </div>
        </>
    )
}
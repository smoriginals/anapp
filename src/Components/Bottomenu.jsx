import React, { useState, useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { LuLoaderPinwheel } from 'react-icons/lu';
import { IoCartOutline } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../Contexts/WishlistContext';
import '../index.css'; // Assuming you have a global CSS file for styles'
export default function Bottomenu({ isToggled }) {

    const { wishlist } = useWishlist();
    const navigate = useNavigate();
    const [animate, setAnimate] = useState(false);

    // 👀 Watch wishlist changes
    useEffect(() => {
        if (wishlist.length > 0) {
            setAnimate(true);
            const timer = setTimeout(() => setAnimate(false), 500); // reset after 0.5s
            return () => clearTimeout(timer);
        }
    }, [wishlist]);


    return (
        <>
            {/* Use either fixed or sticky,own choice */}
            <div className={`sticky bottom-0 left-0 z-50 ${isToggled ? 'rounded-b-xl' : 'rounded-none'} flex h-14 w-full items-center justify-between bg-gray-800 px-2`}>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <AiFillHome className='anime rounded-full text-xl text-gray-500 hover:text-cyan-500' onClick={() => { navigate('/') }} />
                </div>

                {/*<div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>*/}
                {/*    <FaHeart className='anime rounded-full text-xl text-gray-500 hover:text-cyan-500' onClick={() => { navigate('/wishlist') }} />*/}
                {/*</div>*/}
                {/* ❤️ Wishlist Icon with Animation */}
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full">
                    <FaHeart
                        className={`rounded-full text-xl text-gray-500 hover:text-cyan-500 transition-transform duration-300 
                        ${animate ? 'scale-125 text-red-500' : ''}`}
                        onClick={() => {
                            navigate('/wishlist');
                        }}
                    />
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
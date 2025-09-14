import React from 'react';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { MdOutlineLanguage } from 'react-icons/md';
export default function Footer() {
    return (
        <>
            <div className='flex h-full w-full flex-col items-center justify-center'>

                <button className='flex h-1/6 w-full items-center justify-center bg-green-500 p-2 text-md font-bold text-gray-300'>
                    Go to Top
                </button>

                <div className='flex h-2/4 w-full flex-row items-center justify-center gap-2 bg-green-600 p-2'>
                    <div className='items-ceter flex h-1/4 w-full flex-col justify-center gap-4 p-2 text-sm font-medium text-gray-200'>
                        <a href='/'>AlexGarden</a>
                        <a href='/'>Top Rated Flowers</a>
                        <a href='/cart'>Your Cart</a>
                        <a href='/wishlist'>Your Wishlist</a>
                        <a href='/orders'>Your Orders</a>
                    </div>
                    <div className='items-ceter flex h-1/4 w-full flex-col justify-center gap-4 p-2 text-sm font-medium text-gray-200'>
                        <a href='/account'>My Account</a>
                        <a href='/privacy-policy'>Privacy Policy</a>
                        <a href='/terms'>Terms & Conditions</a>
                        <a href='/returnpolicy'>Return Policy</a>
                        <a href='/'>Contact Us</a>
                    </div>
                </div>

                <div className='flex h-2/4 w-full flex-col items-center justify-center bg-orange-600 p-2'>
                    <div className='flex flex-row items-center justify-evenly gap-2 text-gray-200'>
                        <div className='flex h-8 w-auto cursor-pointer items-center justify-center rounded-none  p-2 text-md font-medium gap-2 '><LiaFlagUsaSolid className='text-lg'/>Country</div>
                        <div className='flex h-8 w-auto cursor-pointer items-center justify-center rounded-none   p-2 text-md font-medium gap-2 '><MdOutlineLanguage className='text-lg'/>Language</div>
                        
                    </div>

                    <div className='my-2 flex flex-row items-center justify-evenly rounded-full border border-solid border-white px-4'>
                        <p className='text-md p-2 font-bold text-white'>Already have an account? SignUp</p>
                    </div>
                </div>

            </div>
        </>
    )
}
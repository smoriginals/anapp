import React from 'react';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { MdOutlineLanguage } from 'react-icons/md';
import { PiCurrencyCircleDollar } from 'react-icons/pi';
export default function Footer() {
    return (
        <>
            <div className='flex h-full w-full flex-col items-center justify-center'>

                <div className='flex h-1/6 w-full items-center justify-center bg-gray-500 p-2 text-sm text-gray-300'>
                    ▴ Go to Top ▴
                </div>

                <div className='flex h-2/4 w-full flex-row items-center justify-center gap-2 bg-gray-700 p-2'>
                    <div className='items-ceter flex h-1/4 w-full flex-col justify-center gap-4 p-2 text-sm text-gray-200'>
                        <a href='/'>smoriginals.com</a>
                        <a href='/'>Flower Fantesiya</a>
                        <a href='/'>Your Lists</a>
                        <a href='/'>Recently Viewed Item</a>
                        <a href='/'>Product Safty</a>
                    </div>
                    <div className='items-ceter flex h-1/4 w-full flex-col justify-center gap-4 p-2 text-sm text-gray-200'>
                        <a href='/'>Your Orders</a>
                        <a href='/'>Blogshow</a>
                        <a href='/'>My Account</a>
                        <a href='/'>Return Policy</a>
                        <a href='/'>Sell</a>
                    </div>
                </div>

                <div className='flex h-2/4 w-full flex-col items-center justify-center bg-gray-500 p-2'>
                    <div className='flex flex-row items-center justify-evenly gap-1 text-gray-200'>
                        <div className='flex h-auto w-auto cursor-pointer items-center justify-center rounded-sm border border-solid border-gray-100 px-2 text-sm'><LiaFlagUsaSolid/>Country</div>
                        <div className='flex h-auto w-auto cursor-pointer items-center justify-center rounded-sm border border-solid border-gray-100 px-2 text-sm'><MdOutlineLanguage />Language</div>                                 
                        <div className='flex h-auto w-auto cursor-pointer items-center justify-center rounded-sm border border-solid border-gray-100 px-2 text-sm'><PiCurrencyCircleDollar />Currency</div>
                    </div>

                    <div className='my-2 flex flex-row items-center justify-evenly rounded-md border border-solid border-gray-100'>
                        <p className='text-md p-2 font-bold text-gray-200'>Already have an account? SignUp</p>
                    </div>


                    <div className='bg-red-500'>
                        
                    </div>


                </div>

            </div>
        </>
    )
}
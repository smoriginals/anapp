import React from 'react';
import { LiaFlagUsaSolid } from 'react-icons/lia';
import { MdOutlineLanguage } from 'react-icons/md';
import { PiCurrencyCircleDollar } from 'react-icons/pi';
export default function Footer() {
    return (
        <>
            <div className='h-full w-full flex flex-col justify-center items-center'>

                <div className='h-2/4 w-full bg-gray-500 p-2 flex justify-center items-center text-gray-300'>
                    ▴ Go to Top ▴
                </div>

                <div className='h-2/4 w-full bg-gray-700 p-2 gap-2 flex flex-row justify-center items-center'>
                    <div className='h-1/4 w-full flex flex-col justify-center items-ceter p-2 gap-4 text-md text-gray-200'>
                        <a href='/'>smoriginals.com</a>
                        <a href='/'>Flower Fantesiya</a>
                        <a href='/'>Your Lists</a>
                        <a href='/'>Recently Viewed Item</a>
                        <a href='/'>Product Safty</a>
                    </div>
                    <div className='h-1/4 w-full  flex flex-col justify-center items-ceter p-2 gap-4 text-md text-gray-200'>
                        <a href='/'>Your Orders</a>
                        <a href='/'>Blogshow</a>
                        <a href='/'>My Account</a>
                        <a href='/'>Return Policy</a>
                        <a href='/'>Sell</a>
                    </div>
                </div>

                <div className='h-2/4 w-full bg-gray-500 p-2 flex flex-col justify-center items-center '>
                    <div className='flex flex-row justify-evenly items-center gap-1 text-gray-200'>
                        <div className='cursor-pointer h-auto w-auto px-2 flex justify-center items-center text-md border-2 rounded-sm border-solid border-gray-400'><LiaFlagUsaSolid/>Country</div>
                        <div className='cursor-pointer h-auto w-auto px-2 flex justify-center items-center text-md border-2 rounded-sm border-solid border-gray-400'><MdOutlineLanguage />Language</div>                                 
                        <div className='cursor-pointer h-auto w-auto px-2 flex justify-center items-center text-md border-2 rounded-sm border-solid border-gray-400'><PiCurrencyCircleDollar />Currency</div>
                    </div>

                    <div className='flex flex-row justify-evenly items-center border-2 border-solid border-gray-100 rounded-md my-2'>
                        <p className='text-md font-bold p-2 text-gray-300'>Already have an account? SignUp</p>
                    </div>


                    <div className='bg-red-500'>
                        
                    </div>


                </div>

            </div>
        </>
    )
}
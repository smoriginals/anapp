import React from "react";
import sign from '../assets/6.jpg';
import { AiFillGoogleSquare } from 'react-icons/ai';
import { FaGithubAlt } from 'react-icons/fa';
export default function Signup() {
    return (
        <>
            <div className="relative h-full w-full flex justify-center items-center">
                <img src={sign} className='h-full w-full object-cover brightness-100'/>'
                <div className='absolute inset-0 top-0 left-0 my-auto flex flex-col justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl text-white font-bold z-5 opacity-100'>ALEX's GARDEN</h1>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2 py-4 opacity-95'>
                        
                        <input type="Email" placeholder="Email" className='px-4 py-2 rounded-full shadow-md' />
                        <input type="password" placeholder="Password" className='px-4 py-2 rounded-full shadow-md' />
                        <input type="password" placeholder="Confirm Password" className='px-4 py-2 rounded-full shadow-md' />
                        <input type="number" placeholder="Phone Number" className='px-4 py-2 rounded-full shadow-md' />
                    </div>
                    <button className='bg-green-500 text-white font-bold px-16 py-2 rounded-full shadow-md'>Sign Up</button>
                    <h1 className='py-2 font-bold text-xl text-white'>Or</h1>
                    <div className='flex flex-row justify-center items-center text-white gap-2'>
                        <AiFillGoogleSquare className='text-4xl' />
                        <FaGithubAlt className='text-4xl' />
                    </div>
                    <p className='py-2 text-white'>Already Have an account? <a href='/login' className='text-cyan-600 font-bold'>Login</a></p>
                </div>

               
            </div>
        </>
    );
}

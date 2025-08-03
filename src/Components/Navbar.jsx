import React from 'react';
import '../index.css';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineBars } from 'react-icons/ai';
const Navbar = React.memo(function Navbar({ onLeftClick }) {
    return (
        <>
            <div className='border border-solid border-gray-200 fixed top-0 left-0 flex h-16 w-full items-center justify-between bg-white shadow-lg px-2 z-50'>
                <div className='h-[50px] w-[50px] rounded-full flex flex-nowrap justify-center items-center' onClick={onLeftClick}>
                    <AiOutlineBars src={AiOutlineBars} alt="Bar Icon" className='text-black text-4xl object-cover rounded-full hover:text-cyan-500 animeate' />
                </div>
                <div className='h-[50px] w-[50px] rounded-full flex flex-nowrap justify-center items-center'>
                    <BiSearchAlt src={BiSearchAlt} alt="User Icon" className='text-black text-4xl object-cover rounded-full hover:text-cyan-500 animeate' />
                </div>
            </div>
        </>
    )
})

export default Navbar;
import React from 'react';
import '../index.css';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineBars } from 'react-icons/ai';
const Navbar = React.memo(function Navbar({ onLeftClick }) {
    return (
        <>
            <div className='fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-gray-100 px-2 shadow-lg'>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full' onClick={onLeftClick}>
                    <AiOutlineBars src={AiOutlineBars} alt="Bar Icon" className='animeate rounded-full object-cover text-4xl text-black hover:text-cyan-600' />
                </div>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-full'>
                    <BiSearchAlt src={BiSearchAlt} alt="User Icon" className='animeate rounded-full object-cover text-4xl text-black hover:text-cyan-600' />
                </div>
            </div>
        </>
    )
})

export default Navbar;
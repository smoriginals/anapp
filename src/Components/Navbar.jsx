import React from 'react';
import '../index.css';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineBars } from 'react-icons/ai';
const Navbar = React.memo(function Navbar({ onLeftClick }) {
    return (
        <>
            <div className='fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-gray-100 px-3 shadow-lg'>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-lg' onClick={onLeftClick}>
                    <AiOutlineBars className='animeate rounded-full text-4xl text-black hover:text-cyan-600' />
                </div>
                <div className='flex h-[50px] w-[50px] flex-nowrap items-center justify-center rounded-lg'>
                    <BiSearchAlt className='animeate rounded-full text-4xl text-black hover:text-cyan-600' />
                </div>
            </div>
        </>
    )
})

export default Navbar;
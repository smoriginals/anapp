import React, { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { AiOutlineBars } from 'react-icons/ai';
import '../index.css';

export default function Navbar({ onLeftClick, isToggled }) {

    const [showSearch, setShowSearch] = useState(false);

    return (
        <>
            <div className={`fixed left-0 top-0 z-50 ${isToggled ? 'rounded-t-xl' : 'rounded-none'} flex h-14 w-full items-center justify-between bg-gray-100 px-3 shadow-lg anime`}>


                <div className='flex  items-center justify-center ' onClick={onLeftClick}>
                    {isToggled ? <AiOutlineBars className='anime invisible md:visible md:text-2xl' /> : <AiOutlineBars className='anime md:opacity-100 opacity-100 rounded-full text-4xl text-black hover:text-cyan-600' />}
                </div>


                <div className='flex  items-center justify-center'>
                    {isToggled ? <BiSearchAlt className='invisible' /> : <BiSearchAlt className="rounded-full text-4xl text-black hover:text-cyan-600 cursor-pointer" onClick={() => setShowSearch(prev => !prev)}
                    />}

                    {isToggled ? <input type="search" placeholder="Search..." className='invisible'/> :<input type="search" placeholder="Search..." className={`ml-2 h-10 rounded-lg border border-gray-300 ${showSearch ? 'px-3' : 'px-0'} focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all duration-300 ease-in-out ${showSearch ? 'w-64 opacity-100 md:w-96' : 'w-0 opacity-0 overflow-hidden border-0 px-0'} `}
                    />}
                </div>
            </div>
        </>
    )
}


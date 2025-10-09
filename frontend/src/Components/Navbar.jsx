//import React, { useState } from 'react';
//import { BiSearchAlt } from 'react-icons/bi';
//import { AiOutlineBars } from 'react-icons/ai';
//import '../index.css';

//export default function Navbar({ onLeftClick, isToggled }) {

//    const [showSearch, setShowSearch] = useState(false);

//    return (
//        <>
//            <div className={`fixed left-0 top-0 z-50 ${isToggled ? 'rounded-t-xl' : 'rounded-none'} flex h-14 w-full items-center justify-between bg-gray-100 px-3 shadow-lg anime`}>


//                <div className='flex items-center justify-center' onClick={onLeftClick}>
//                    {isToggled ? <AiOutlineBars className='anime invisible md:visible md:text-2xl' /> : <AiOutlineBars className='anime rounded-full text-4xl text-black opacity-100 hover:text-cyan-600 md:opacity-100' />}
//                </div>


//                <div className='flex items-center justify-center'>
//                    {isToggled ? <BiSearchAlt className='invisible' /> : <BiSearchAlt className="cursor-pointer rounded-full text-4xl text-black hover:text-cyan-600" onClick={() => setShowSearch(prev => !prev)}
//                    />}

//                    {isToggled ? <input type="search" placeholder="Search..." className='invisible'/> :<input type="search" placeholder="Search..." className={`ml-2 h-10 rounded-lg border border-gray-300 ${showSearch ? 'px-3' : 'px-0'} focus:outline-none focus:ring-2 focus:ring-cyan-600 transition-all duration-300 ease-in-out ${showSearch ? 'w-64 opacity-100 md:w-96' : 'w-0 opacity-0 overflow-hidden border-0 px-0'} `}
//                    />}
//                </div>
//            </div>
//        </>
//    )
//}

import React, { useState } from 'react';
import SideBar from './Sidebar';
import { HiMenuAlt2 } from 'react-icons/hi';
import { FaRegUser } from 'react-icons/fa';

export default function Navbar() {

    const [slider, setSlider] = useState(false);

    return (
        <>
            <div className='h-16 w-full bg-red-500 flex justify-center items-center'>
                <div className='bg-blue-500 h-12 w-full mx-2 flex justify-between items-center px-1'>

                    <button onClick={() => setSlider(prev => !prev)}><HiMenuAlt2 className='text-2xl font-bold'/></button>

                    <div><input type='search' placeholder='Search Here' className='w-full px-3 py-1 rounded-full font-medium  focus:outline-none ' /></div>
                    {/*focus:ring-2 focus:ring-blue-500 focus:border-blue-500*/ }

                    <button><FaRegUser className='text-2xl font-bold' /></button>

                </div>
            </div>

            <div className={`h-full w-1/2 bg-green-600 absolute z-10 flex flex-col justify-start items-start gap-4 px-2 py-4 text-md transition-all duration-300 ease-in-out ${slider?'-translate-x-0':'-translate-x-full'}`}> {/*-translate-x-0*/}
                <SideBar />
            </div>

        </>
    )
}

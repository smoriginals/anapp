import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
//import { motion, AnimatePresence } from 'framer-motion';

import { AiFillHome } from 'react-icons/ai';
import { MdCategory } from 'react-icons/md';
import { GoListOrdered } from 'react-icons/go';
import { LuLanguages } from 'react-icons/lu';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import { TbHelpCircleFilled } from 'react-icons/tb';
import { IoMdContacts } from 'react-icons/io';
import { AiOutlineLogout } from 'react-icons/ai';

export default function SideBar({ show, onlinkClick }) {

    //const links = [
    //    {name:'Home',path:'/'},
    //    {name:'Shop',path:'/shop'},
    //    {name:'Services',path:'/services'},
    //    {name:'Cart',path:'/cart'},
    //    {name:'Orders',path:'/orders'},
    //    {name:'My Account',path:'/account'},
    //    {name:'Contact Us',path:'/contact'},
    //    {name:'About',path:'/about'},
    //];

    return (
        //<AnimatePresence>
        //    {show && (
        //        <motion.div
        //            initial={{ x: '-100%' }}
        //            animate={{ x: 0 }}
        //            exit={{ x: '-100%' }}
        //            transition={{ duration: 0.3 }}

        //            className='fixed z-0 flex h-dvh w-dvw items-center justify-start bg-white'
        //        >
        //            {/* Links Container */}
        //            <div className='h-4/5 w-3/5 rounded-r-md bg-red-200 py-4 md:w-1/5'>
        //                <div className='grid grid-cols-1 gap-4 p-4'>
        //                    {links.map((link, index) => (
        //                        <Link key={link.name} to={link.path} onClick={onlinkClick}>
        //                            <motion.div
        //                                initial={{ opacity: 0, x: -20 }}
        //                                animate={{ opacity: 1, x: 0 }}
        //                                transition={{ delay: 0.1 * index, duration: 0.3 }}
        //                                className='block text-lg font-medium text-black hover:underline'
        //                            >
        //                                {link.name}
        //                            </motion.div>
        //                        </Link>

        //                    ))}
        //                </div>
        //            </div>
        //            {/* Links Container */}
        //        </motion.div>
        //    )}
        //</AnimatePresence>

        <>
            <div className='flex justify-start items-start flex-col gap-5'>

                <Link to='/' className='text-md font-medium flex justify-start items-center gap-2 px-2'><AiFillHome className='text-lg font-bold' />Home</Link>
                <Link to='/' className='text-md font-medium flex justify-start items-center gap-2 px-2'><MdCategory className='text-lg font-bold' />Categories</Link>
                <Link to='/' className='text-md font-medium flex justify-start items-center gap-2 px-2'><GoListOrdered className='text-lg font-bold' />My Orders</Link>
                <Link to='/' className='text-md font-medium flex justify-start items-center gap-2 px-2'><LuLanguages className='text-lg font-bold' />Set Language</Link>
                <Link to='/' className='text-md font-medium flex justify-start items-center gap-2 px-2'><BsFillCartCheckFill className='text-lg font-bold' />My Cart</Link>
                <Link to='/' className='text-md font-medium flex justify-start items-center gap-2 px-2'><FaHeart className='text-lg font-bold' />My Wishlist</Link>
                <Link to='/' className='text-md font-medium flex justify-start items-center gap-2 px-2'><FaRegUser className='text-lg font-bold' />My Account</Link>
                <Link to='/' className='text-md font-medium flex justify-start items-center gap-2 px-2'><TbHelpCircleFilled className='text-lg font-bold' />Help Center</Link>
                <Link to='/' className='text-md font-medium flex justify-start items-center gap-2 px-2'><IoMdContacts className='text-lg font-bold' />Contact Us</Link>
                <Link to='/' className='text-md font-medium mt-40 flex justify-start items-center gap-2 px-2'><AiOutlineLogout className='text-lg font-bold' />Log Out</Link>

            </div>
        </>
    );
}

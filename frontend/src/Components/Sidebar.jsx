import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome, AiOutlineLogout} from 'react-icons/ai';

import { MdCategory } from 'react-icons/md';
import { GoListOrdered } from 'react-icons/go';
import { LuLanguages } from 'react-icons/lu';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { FaHeart, FaRegUser } from 'react-icons/fa';
import { TbHelpCircleFilled } from 'react-icons/tb';
import { IoMdContacts } from 'react-icons/io';


export default function SideBar({ onLinkClick }) {
    const links = [
        { to: '/', icon: <AiFillHome className='text-lg font-bold' />, label: 'Home' },
        { to: '/Categories', icon: <MdCategory className='text-lg font-bold' />, label: 'Categories' },
        { to: '/orders', icon: <GoListOrdered className='text-lg font-bold' />, label: 'My Orders' },
        { to: '/Language', icon: <LuLanguages className='text-lg font-bold' />, label: 'Set Language' },
        { to: '/Cart', icon: <BsFillCartCheckFill className='text-lg font-bold' />, label: 'My Cart' },
        { to: '/Wishlist', icon: <FaHeart className='text-lg font-bold' />, label: 'My Wishlist' },
        { to: '/Account', icon: <FaRegUser className='text-lg font-bold' />, label: 'My Account' },
        { to: '/Help', icon: <TbHelpCircleFilled className='text-lg font-bold' />, label: 'Help Center' },
        { to: '/Contact', icon: <IoMdContacts className='text-lg font-bold' />, label: 'Contact Us' }
    ];
    return (
        <div className='flex justify-start items-start flex-col gap-5'>

            {/*{links.map((labelName, gotoURL) => (*/}
            {/*    <Link key={gotoURL.to} to={labelName.gotoURL} onClick={onLinkClick} className='text-md font-medium flex justify-start items-center gap-2 px-2 hover:text-white'>*/}
            {/*        {labelName.icon}{labelName.label}*/}
            {/*    </Link>*/}
            {/*))}*/}

            {/*<Link to='/logout' onClick={onLinkClick}  className='text-md font-medium mt-40 flex justify-start items-center gap-2 px-2'>*/}
            {/*    <AiOutlineLogout className='text-lg font-bold' />Log Out*/}
            {/*</Link>*/}

            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link.to}
                    onClick={onLinkClick}
                    className='text-md font-medium flex justify-start items-center gap-2 px-2 hover:text-white transition-colors duration-150'
                >
                    {link.icon}
                    {link.label}
                </Link>
            ))}

            {/*<Link*/}
            {/*    to='/logout'*/}
            {/*    onClick={onLinkClick}*/}
            {/*    className='text-md font-medium mt-40 flex justify-start items-center gap-2 px-2 hover:text-white'*/}
            {/*>*/}
            {/*    <AiOutlineLogout className='text-lg font-bold' />*/}
            {/*    Log Out*/}
            {/*</Link>*/}


        </div>
    );
}

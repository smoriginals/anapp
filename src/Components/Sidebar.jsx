import React from 'react';
import { motion as Motion, AnimatePresence } from 'framer-Motion';

export default function SideBar({ show }) {
    const links = [
        'Home',
        'Products',
        'Services',
        'Categorys',
        'Cart',
        'Orders',
        'Account & Profile',
        'Contact Us',
        'About',
        ' ',
        ' ',
        ' ',
        'Log Out'
    ];

    return (
        <AnimatePresence>
            {show && (
                <Motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.3 }}

                    className='fixed h-dvh w-dvw flex justify-start items-center bg-white z-0'
                >
                    {/* Links Container */}
                    <div className='h-4/5 w-3/5 rounded-r-xl bg-red-200 py-4'>
                        <div className='grid grid-cols-1 gap-4 p-4'>
                            {links.map((text, index) => (
                                <Motion.a
                                    href='/'
                                    key={text}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                                    className='decoration-none block text-lg font-medium text-black'
                                >
                                    {text}
                                </Motion.a>
                            ))}
                        </div>
                    </div>
                    {/* Links Container */}
                </Motion.div>
            )}
        </AnimatePresence>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function SideBar({ show }) {

    const links = [
        {name:'Home',path:'/'},
        {name:'Products',path:'/products'},
        {name:'Services',path:'/services'},
        {name:'Categorys',path:'/category'},
        {name:'Cart',path:'/cart'},
        {name:'Orders',path:'/orders'},
        {name:'Account & Profile',path:'/account'},
        {name:'Contact Us',path:'/contact'},
        {name:'About',path:'/about'},
        {name:'Log Out',path: '/logout' }
    ];

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration: 0.3 }}

                    className='fixed h-dvh w-dvw flex justify-start items-center bg-white z-0'
                >
                    {/* Links Container */}
                    <div className='h-4/5 w-3/5 md:w-1/5  rounded-r-xl bg-red-200 py-4'>
                        <div className='grid grid-cols-1 gap-4 p-4'>
                            {links.map((link, index) => (
                                <Link key={link.name} to={link.path}>
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                                        className='block text-lg font-medium text-black hover:underline'
                                    >
                                        {link.name}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Links Container */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

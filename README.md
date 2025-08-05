# anapp
challenge of figma with tailwind

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../index.css';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

export default function SideBar({ show }) {

    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Service', path: '/service' },
        { name: 'Explore', path: '/explore' },
        { name: 'Wallet', path: '/wallet' },
        { name: 'Categoury', path: '/categoury' },
        { name: 'Help & Support', path: '/help' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'About', path: '/about' },
        { name: 'Log Out', path: '/logout' },
    ];

    const handleLinkClick = (path) => {
        navigate(path);
        show(); // Close sidebar after navigation
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-100%' }}
                    transition={{ duration:0.4 }}
                    className='absolute left-0 top-0 h-screen w-full overflow-hidden bg-white flex justify-start items-center'
                >
                    {/* Links Container */}
                    <div className='m-2 h-[75%] w-4/6 overflow-hidden bg-white'>
                        <div className='grid grid-cols-1 gap-4 p-4'>
                            {links.map((text, index) => {
                                const isActive = location.pathname === text.path;
                                return (
                                    <motion.div
                                        key={text.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                                        className='decoration-none block text-lg font-medium text-black'
                                    >
                                        <Link
                                            to={text.path}
                                            className={`block text-lg font-medium transition-all duration-200 ${isActive
                                                ? 'text-white bg-cyan-500 px-3 py-2 rounded-lg shadow-md'
                                                : 'text-black hover:underline hover:text-blue-700'
                                                }`}
                                            onClick={() => handleLinkClick(text.path)}

                                        >
                                            {text.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                    {/* Links Container */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

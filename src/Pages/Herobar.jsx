/* eslint-disable no-unused-vars */  
import React, { useEffect } from "react";  
import { useNavigate } from 'react-router-dom';  
import { useHeroBar } from '../Contexts/Heroctx';
import { motion, AnimatePresence } from "framer-motion";  
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';  

export default function HeroBar() {

    const navigate = useNavigate();
    const { myImages, index, setIndex, handleNext, handlePrev } = useHeroBar();

    // auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="mt-2 flex h-2/5 w-full items-center justify-center bg-gray-100 p-1 shadow-2xl">
            <div className="relative h-52 w-full overflow-hidden rounded-sm shadow-lg">
                {/* IMAGE SLIDES */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={myImages[index].img}
                        alt="slideshow"
                        className="absolute left-0 top-0 h-full w-full object-cover"
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.5}
                        onDragEnd={(e, { offset, velocity = 100 }) => {
                            if (offset.x < -velocity) {
                                handleNext();
                            } else if (offset.x > velocity) {
                                handlePrev();
                            }

                        }}
                        onClick={() => navigate(myImages[index].link)}
                    />
                </AnimatePresence>

                {/* CONTROLS */}
                <button
                    onClick={handlePrev}
                    className="-translate-y-1/2 absolute left-2 top-1/2 rounded-full bg-black bg-opacity-40 px-2 py-1 text-white hover:bg-opacity-60"
                >
                    <BsChevronLeft />

                </button>
                <button
                    onClick={handleNext}
                    className="-translate-y-1/2 absolute right-2 top-1/2 rounded-full bg-black bg-opacity-40 px-2 py-1 text-white hover:bg-opacity-60"
                >
                    <BsChevronRight />
                </button>

                {/* DOTS INDICATOR */}
                <div className="absolute bottom-2 flex w-full justify-center gap-2">
                    {myImages.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1 w-1 rounded-full cursor-pointer transition-all duration-300 ease ${index === i ? "bg-white scale-125" : "bg-gray-400"
                                }`}
                        >
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import img9 from "../assets/9.jpg";
import img10 from "../assets/10.jpg";

export default function HeroBar() {
    const myImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const [index, setIndex] = useState(0);

    // auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % myImages.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + myImages.length) % myImages.length);
    };

    return (
        <div className="mt-2 flex h-2/5 w-full items-center justify-center bg-gray-100 p-1 shadow-2xl">
            <div className="relative h-52 w-full overflow-hidden rounded-sm shadow-lg">
                {/* IMAGE SLIDES */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={myImages[index]}
                        alt="slideshow"
                        className="absolute left-0 top-0 h-full w-full object-cover"
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.5}
                        onDragEnd={(e, { offset, velocity=100 }) => {
                            if (offset.x < -velocity) {
                                handleNext();
                            } else if (offset.x > velocity) {
                                handlePrev();
                            }
                        }}
                    />
                </AnimatePresence>

                {/* CONTROLS */}
                <button
                    onClick={handlePrev}
                    className="-translate-y-1/2 absolute left-2 top-1/2 rounded-full bg-black bg-opacity-40 px-2 py-1 text-white hover:bg-opacity-60"
                >
                    <BsChevronLeft/>
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
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}


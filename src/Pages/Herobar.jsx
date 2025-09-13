// /* eslint-disable no-unused-vars */  
// import React, { useEffect ,useState} from "react";  
// import { useNavigate } from 'react-router-dom';  
// import { motion, AnimatePresence } from "framer-motion";  
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';  

// import img1 from "../assets/1.jpg";
// import img2 from "../assets/2.jpg";
// import img3 from "../assets/3.jpg";
// import img4 from "../assets/4.jpg";
// import img5 from "../assets/5.jpg";
// import img6 from "../assets/6.jpg";
// import img7 from "../assets/7.jpg";
// import img8 from "../assets/8.jpg";
// import img9 from "../assets/9.jpg";
// import img10 from "../assets/10.jpg"; 
// import garden from '../assets/Garden.mp4';


// export default function HeroBar() {

//     const myImages = [
//         { img: img1, link: "/off/90" },
//         { img: img2, link: "/off/80" },
//         { img: img3, link: "/off/70" },
//         { img: img4, link: "/off/60" },
//         { img: img5, link: "/off/50" },
//         { img: img6, link: "/off/40" },
//         { img: img7, link: "/off/30" },
//         { img: img8, link: "/off/20" },
//         { img: img9, link: "/off/10" },
//         { img: img10, link: "/off/special" }
//     ];

//     const navigate = useNavigate();
//     const [index, setIndex] = useState(0);
//     const [isMobile,setMoblie]=useState(false);

//     const handleNext = () => setIndex((prev) => (prev + 1) % myImages.length);
//     const handlePrev = () => setIndex((prev) => (prev - 1 + myImages.length) % myImages.length);

//       // Handle screen size
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth < 768); // Tailwind 'md' breakpoint
//         };
//         handleResize();
//         window.addEventListener("resize", handleResize);
//         return () => window.removeEventListener("resize", handleResize);
//     }, []);


//     // auto-slide effect
//     useEffect(() => {
//         const interval = setInterval(() => {
//             handleNext();
//         }, 5000);
//         return () => clearInterval(interval);
//     }, [index]);

//     return (
//         <div className="mt-2 flex h-2/5 w-full items-center justify-center bg-gray-100 p-1 shadow-2xl">
//             <div className="relative h-52 w-full overflow-hidden rounded-sm shadow-lg">
//                 {/* IMAGE SLIDES */}
//                 <AnimatePresence mode="wait">
//                     <motion.img
//                         key={index}
//                         src={myImages[index].img}
//                         alt="slideshow"
//                         className="absolute left-0 top-0 h-full w-full object-cover"
//                         initial={{ x: "100%", opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         exit={{ x: "-100%", opacity: 0 }}
//                         transition={{ duration: 0.6, ease: "easeInOut" }}
//                         drag="x"
//                         dragConstraints={{ left: 0, right: 0 }}
//                         dragElastic={0.5}
//                         onDragEnd={(e, { offset, velocity = 100 }) => {
//                             if (offset.x < -velocity) {
//                                 handleNext();
//                             } else if (offset.x > velocity) {
//                                 handlePrev();
//                             }

//                         }}
//                         onClick={() => navigate(myImages[index].link)}
//                     />
//                 </AnimatePresence>

//                 {/* CONTROLS */}
//                 <button
//                     onClick={handlePrev}
//                     className="-translate-y-1/2 absolute left-2 top-1/2 rounded-full bg-black bg-opacity-40 px-2 py-1 text-white hover:bg-opacity-60"
//                 >
//                     <BsChevronLeft />

//                 </button>
//                 <button
//                     onClick={handleNext}
//                     className="-translate-y-1/2 absolute right-2 top-1/2 rounded-full bg-black bg-opacity-40 px-2 py-1 text-white hover:bg-opacity-60"
//                 >
//                     <BsChevronRight />
//                 </button>

//                 {/* DOTS INDICATOR */}
//                 <div className="absolute bottom-2 flex w-full justify-center gap-2">
//                     {myImages.map((_, i) => (
//                         <div
//                             key={i}
//                             onClick={() => setIndex(i)}
//                             className={`h-1 w-1 rounded-full cursor-pointer transition-all duration-300 ease ${index === i ? "bg-white scale-125" : "bg-gray-400"
//                                 }`}
//                         >
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

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
import garden from '../assets/Garden.mp4';

export default function HeroBar() {
    const myImages = [
        { img: img1, link: "/off/90" },
        { img: img2, link: "/off/80" },
        { img: img3, link: "/off/70" },
        { img: img4, link: "/off/60" },
        { img: img5, link: "/off/50" },
        { img: img6, link: "/off/40" },
        { img: img7, link: "/off/30" },
        { img: img8, link: "/off/20" },
        { img: img9, link: "/off/10" },
        { img: img10, link: "/off/special" }
    ];

    const navigate = useNavigate();
    const [index, setIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Handle screen size
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Tailwind 'md' breakpoint
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Auto-slide images
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [index]);

    const handleNext = () => setIndex((prev) => (prev + 1) % myImages.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + myImages.length) % myImages.length);

    return (
        <div className="w-full">
            {isMobile ? (
                // ✅ Mobile: Image Carousel
                <div className="mt-2 flex h-2/5 w-full items-center justify-center bg-gray-100 p-1 shadow-2xl">
                    <div className="relative h-52 w-full overflow-hidden rounded-sm shadow-lg">
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

                        {/* Arrows */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-40 px-2 py-1 text-white hover:bg-opacity-60"
                        >
                            <BsChevronLeft />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black bg-opacity-40 px-2 py-1 text-white hover:bg-opacity-60"
                        >
                            <BsChevronRight />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-2 flex w-full justify-center gap-2">
                            {myImages.map((_, i) => (
                                <div
                                    key={i}
                                    onClick={() => setIndex(i)}
                                    className={`h-1 w-1 cursor-pointer rounded-full transition-all duration-300 ease-in-out ${index === i ? "bg-white scale-125" : "bg-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                // ✅ Desktop: Video Hero Section
                <div className="relative h-[70vh] w-full overflow-hidden rounded-sm shadow-2xl">
                    <video
                        className="absolute top-0 left-0 h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src={garden} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    Overlay Content
                    {/* <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-center p-4">
                        <h1 className="text-5xl font-bold mb-4">Welcome to ALEX GARDEN</h1>
                        <p className="text-xl">Special seasonal offers just for you!</p>
                        <button
                            onClick={() => navigate("/off/special")}
                            className="mt-6 rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700"
                        >
                            Explore Now
                        </button>
                    </div> */}
                    {/* ✅ Animated Overlay Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 text-white text-center p-4">
                        <motion.h1
                            className="text-5xl font-bold mb-4"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        >
                            Welcome to ALEX GARDEN
                        </motion.h1>

                        <motion.p
                            className="text-xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        >
                            Special seasonal offers just for you!
                        </motion.p>

                        <motion.button
                            onClick={() => navigate("/off/special")}
                            className="mt-6 rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        >
                            Explore Now
                        </motion.button>
                    </div>
                </div>
            )}
        </div>
    );
}

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";

export default function MiniHeroBar() {
    const Images = [img1, img2, img3, img4, img5];
    const [myIndex, setMyIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMyIndex((prev) => (prev + 1) % Images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [Images.length]);

    return (
        <div className="bg-red p-1 h-1/5 w-full flex flex-nowrap justify-center items-center">
            <div className="bg-white rounded-sm h-32 w-full relative overflow-hidden shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={myIndex}
                        src={Images[myIndex]}
                        alt="slideshow"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}

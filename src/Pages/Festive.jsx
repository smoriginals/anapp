import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/a19.jpg";
import img2 from "../assets/a20.jpg";
import img3 from "../assets/a21.jpg";
import img4 from "../assets/a22.jpg";
import img5 from "../assets/a23.jpg";

export default function Festive({ delay, duration }) {
    const Images = [img1, img2, img3, img4, img5];
    const [myIndex, setMyIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMyIndex((prev) => (prev + 1) % Images.length);
        }, delay);
        return () => clearInterval(interval);
    }, [delay,Images.length]);

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
                        transition={{ duration, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}

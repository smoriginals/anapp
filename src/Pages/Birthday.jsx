import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/a8.jpg";
import img2 from "../assets/a9.jpg";
import img3 from "../assets/a10.jpg";
import img4 from "../assets/a11.jpg";
import img5 from "../assets/a12.jpg";
import img6 from "../assets/a13.jpg";

export default function Birthday({delay,duration }) {
    const Images = [img1, img2, img3, img4, img5,img6];
    const [myIndex, setMyIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setMyIndex((prev) => (prev + 1) % Images.length);
        }, delay);
        return () => clearInterval(interval);
    }, [delay,Images.length]);

    return (
        <div className="bg-red flex h-1/5 w-full flex-nowrap items-center justify-center p-1">
            <div className="relative h-32 w-full overflow-hidden rounded-sm bg-white shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={myIndex}
                        src={Images[myIndex]}
                        alt="slideshow"
                        className="absolute left-0 top-0 h-full w-full object-cover"
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

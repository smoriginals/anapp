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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
}

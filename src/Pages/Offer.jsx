import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/6.jpg";
import img2 from "../assets/7.jpg";
import img3 from "../assets/8.jpg";
import img4 from "../assets/9.jpg";
import img5 from "../assets/10.jpg";

export default function Offer() {

    const OfferImages = [img1, img2, img3, img4, img5];
    const [offerIndex, setOfferIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOfferIndex((prev) => (prev + 1) % OfferImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [OfferImages.length]);

    return (
        <>
            <div className='bg-red p-1 h-96 w-full flex justify-center items-center'>
                <div className='bg-white h-full w-full flex justify-center items-center relative shadow-lg'>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={offerIndex}
                            src={OfferImages[offerIndex]}
                            alt="slideshow"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-sm"
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}
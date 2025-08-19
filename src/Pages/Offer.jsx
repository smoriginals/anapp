import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../assets/a1.png";
import img2 from "../assets/a2.png";
import img3 from "../assets/a3.png";

export default function Offer({ delay, duration }) {

    const OfferImages = [img1, img2, img3];
    const [offerIndex, setOfferIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOfferIndex((prev) => (prev + 1) % OfferImages.length);
        }, delay);
        return () => clearInterval(interval);
    }, [delay,OfferImages.length]);

    return (
        <>
            <div className='bg-red p-1 h-96 w-full flex flex-nowrap justify-center items-center'>
                <div className='bg-white h-full w-full flex justify-center items-center overflow-hidden relative shadow-lg'>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={offerIndex}
                            src={OfferImages[offerIndex]}
                            alt="slideshow"
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-sm"
                            initial={{ y: "-100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ duration, ease: "easeInOut" }}
                        />
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}
//<div className="bg-red p-1 h-1/5 w-full flex flex-nowrap justify-center items-center">
    {/*<div className="bg-white rounded-sm h-32 w-full relative overflow-hidden shadow-lg">*/}
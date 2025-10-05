import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import img1 from "../assets/a1.png";
import img2 from "../assets/a2.png";
import img3 from "../assets/a3.png";


//Use this for bottom sales and mega offers 

export default function Offer({ delay, duration }) {

    const navigate = useNavigate();

    //const OfferImages = [img1, img2, img3];
    const OfferImages = [
        { img: img1, link: "/off/90" },
        { img: img2, link: "/off/80" },
        { img: img3, link: "/off/70" }
    ];

    const [offerIndex, setOfferIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setOfferIndex((prev) => (prev + 1) % OfferImages.length);
        }, delay);
        return () => clearInterval(interval);
    }, [delay,OfferImages.length]);

    return (
        <>
            <div className='bg-red flex h-96 w-full flex-nowrap items-center justify-center p-1 cursor-pointer'>
                <div className='relative flex h-full w-full items-center justify-center overflow-hidden bg-white shadow-lg'>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={offerIndex}
                            src={OfferImages[offerIndex].img}
                            alt="slideshow"
                            className="absolute left-0 top-0 h-full w-full rounded-sm object-cover"
                            initial={{ y: "-100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ duration, ease: "easeInOut" }}
                            onClick={() => navigate('/shop') }
                        />
                    </AnimatePresence>
                </div>
            </div>
        </>
    );
}
//<div className="bg-red flex h-1/5 w-full flex-nowrap items-center justify-center p-1">
    {/*<div className="relative h-32 w-full overflow-hidden rounded-sm bg-white shadow-lg">*/}
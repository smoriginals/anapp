import React, { createContext, useContext, useState } from "react";

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

const Heroctx = createContext();

export const HeroBarProvider = ({ children }) => {

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

    const [index, setIndex] = useState(0);

    const handleNext = () => setIndex((prev) => (prev + 1) % myImages.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + myImages.length) % myImages.length);

    return (
        <Heroctx.Provider value={{ myImages, index, setIndex, handleNext, handlePrev }}>
            {children}
        </Heroctx.Provider>
    );
};


// eslint-disable-next-line react-refresh/only-export-components
export const useHeroBar = () => useContext(Heroctx);
import React, { createContext, useContext, useState } from "react";

const Itemsctx = createContext();


export const ItemCardProvider = ({ children }) => {

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
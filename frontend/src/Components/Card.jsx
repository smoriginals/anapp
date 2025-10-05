// Card.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Bottomenu from "../Components/Bottomenu";
import SideBar from "./Sidebar";
import LoadingBar from "react-top-loading-bar";

export default function Card({ children }) {

    const [slideRight, setSlideRight] = useState(false);
    const location = useLocation();
    const ref = useRef(null);

    const HandleSlideRight = () => setSlideRight((prev) => !prev);

    // swipe handling
    useEffect(() => {
        let touchstartX = 0;
        let touchendX = 0;

        const handleTouchStartX = (e) => (touchstartX = e.touches[0].clientX);
        const handleTouchMove = (e) => (touchendX = e.touches[0].clientX);
        const handleTouchEnd = () => {
            if (touchstartX - touchendX > 50) setSlideRight(false);
        };

        const container = document.getElementById("main-container");
        container.addEventListener("touchstart", handleTouchStartX);
        container.addEventListener("touchmove", handleTouchMove);
        container.addEventListener("touchend", handleTouchEnd);

        return () => {
            container.removeEventListener("touchstart", handleTouchStartX);
            container.removeEventListener("touchmove", handleTouchMove);
            container.removeEventListener("touchend", handleTouchEnd);
        };
    }, []);

    // loading bar on route change
    useEffect(() => {
        if (!ref.current) return;
        ref.current.continuousStart();
        requestAnimationFrame(() => ref.current.complete());
    }, [location.pathname]);

    return (
        <>
            
            <SideBar show={slideRight} onlinkClick={() => setSlideRight(false)} /> {/* Sidebar */}

            
            <LoadingBar color="#f97316" ref={ref} height={2} shadow={true} />  {/* Loading Bar */}

            {/* Main Container */}
            <div
                className={`fixed top-0 h-dvh w-dvw ${slideRight ? "slide-right shadow-2xl" : "slide-left shadow-none"
                    } transition-all duration-300 ease-in-out z-50`}
                id="main-container"
            >
                
                <Navbar onLeftClick={HandleSlideRight} isToggled={slideRight} searchClick={slideRight} />  {/* Navbar */}

                {/* Page Content */}
                <div className="h-full overflow-y-auto rounded-2xl bg-white py-12">
                    {children}
                </div>

                {/* Bottom Menu */}
                <Bottomenu isToggled={slideRight} />
            </div>
        </>
    );
}


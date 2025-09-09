import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react'; //use to reffer the top loading bar.
import { useLocation } from 'react-router-dom'; //use to track the routes changes.
import Navbar from '../Components/Navbar';
import Bottomenu from '../Components/Bottomenu';
import Homeapps from '../Components/Homeapps'; // Import Homeapps component directly for simplicity
import SideBar from './Sidebar';
import '../index.css'; // Assuming you have a global CSS file for styles'
import LoadingBar from 'react-top-loading-bar'; // Importing LoadingBar for loading indication


import Shop from '../Pages/shop';
import Services from '../Pages/services';
import Cart from '../Pages/cart';
import Orders from '../Pages/orders';
import Account from '../Pages/account';
import Contact from '../Pages/contact';
import About from '../Pages/about';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Productview from '../Pages/Productview';
import Checkout from '../Pages/Checkout';
import NotFound from '../Pages/NotFound';
import Wishlist from '../Pages/Wishlist';
import UpdateProfile from '../Pages/UpdateProfile';
import Profile from '../Pages/Profile';
import Terms from '../Pages/Terms';
//import PrivacyPolicy from '../Pages/PrivacyPolicy';
import OfferProducts from '../Pages/OfferProducts';

export default function Card() {

    const [slideRight, setSlideRight] = useState(false);
    const location = useLocation();
    const ref = useRef(null);

    const HandleSlideRight = () => {
        setSlideRight(prev => !prev); //Toggle left/right slide
    }

    useEffect(() => {
        let touchstartX = 0;
        let touchendX = 0;

        const handleTouchStartX = (e) => {
            touchstartX = e.touches[0].clientX; // Get the initial touch position
        }
        const handleTouchMove = (e) => {
            touchendX = e.touches[0].clientX; // Get the initial touch position
        }
        const handleTouchEnd = () => {
            if (touchstartX - touchendX > 50) {
                setSlideRight(false); // Swipe left to show sidebar
            }
        }

        const container = document.getElementById('main-container');

        container.addEventListener('touchstart', handleTouchStartX);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);

        return () => {
            container.removeEventListener('touchstart', handleTouchStartX);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
        }


    }, [])

    // Card.jsx
    useEffect(() => {
        if (!ref.current) return;

        // Start loading bar
        ref.current.continuousStart();

        // Listen for next tick when the route component mounts
        const handleLoadComplete = () => {
            ref.current.complete();
        };

        // Delay ensures the DOM update after route change
        requestAnimationFrame(() => {
            handleLoadComplete();
        });

    }, [location.pathname]);



    return (

        <>
            {/*Slidebar comes from left*/}
            <SideBar show={slideRight} onlinkClick={() => setSlideRight(false)} />
            {/*Slidebar comes from left*/}

            {/* Loading Bar at top */}
            <LoadingBar color="#f97316" ref={ref} height={2} shadow={true} />
            {/* Loading Bar at top */}

            {/*Whole Container*/}
            <div className={`fixed top-0 h-dvh w-dvw ${slideRight ? 'slide-right shadow-2xl' : 'slide-left shadow-none'} transition-all duration-300 ease-in-out z-50`} id="main-container">

                {/*Navbar*/}
                <Navbar onLeftClick={HandleSlideRight} isToggled={slideRight} searchClick={slideRight} />
                {/*Navbar*/}


                {/*Homeapps*/}
                <div className="h-full overflow-y-auto rounded-2xl bg-white py-12"> {/* Padding to prevent overlap */}
                    <Routes>
                        <Route path="/" element={<Homeapps />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/services" element={<Services />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/account' element={<Account />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/product/:id' element={<Productview />} />
                        <Route path='/checkout' element={<Checkout />} />
                        <Route path='/wishlist' element={<Wishlist />} />
                        <Route path='/updatep' element={<UpdateProfile />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/terms' element={<Terms />} />
                        {/*<Route path='/privacypolicy' element={<PrivacyPolicy />} />*/}
                        <Route path='/off/:id' element={<OfferProducts />} />


                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </div>
                {/*Home*/}


                {/*Bottom menu Bar*/}
                <Bottomenu isToggled={slideRight} />
                {/*Bottom menu Bar*/}

            </div>
            {/*Whole Container*/}

        </>

    )
}
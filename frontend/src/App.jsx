//// App.jsx

//import { Routes, Route,useLocation } from "react-router-dom";
//import Card from "./Components/Card";

//import Signup from "./admin/Signup";
//import Login from "./admin/Login";

//import Homeapps from "./Components/Homeapps";
//import Shop from "./Pages/shop";
//import Services from "./Pages/services";
//import Cart from "./Pages/cart";
//import Orders from "./Pages/orders";
//import Account from "./Pages/account";
//import Contact from "./Pages/contact";
//import About from "./Pages/about";
//import Productview from "./Pages/Productview";
//import Checkout from "./Pages/Checkout";
//import Wishlist from "./Pages/Wishlist";
//import UpdateProfile from "./Pages/UpdateProfile";
//import Profile from "./Pages/Profile";
//import Terms from "./Pages/Terms";
//import OfferProducts from "./Pages/OfferProducts";
//import NotFound from "./Pages/NotFound";
//import Dashboard from "./admin/Dashboard";
//import AddFetchProducts from "./Pages/AddFetchProducts";

//import React, { useRef, useEffect} from "react";
//import LoadingBar from "react-top-loading-bar";

//function LoadingBarHandler() {
//    const ref = useRef(null);
//    const location = useLocation();
//    useEffect(() => {
//        ref.current?.continuousStart();
//        const timer = setTimeout(() => {
//            ref.current?.complete();
//        }, 500);
//        return () => clearTimeout(timer);
//    }, [location])

//    return <LoadingBar color="#3b82f6" ref={ref} hight={3} transitionTime={300} />

//}





////import PrivacyPolicy from './Pages/PrivacyPolicy';
//export default function App() {
//    return (
//        <div className="h-screen w-full overflow-hidden">
//            <Card>
//                <Routes>
//                    <LoadingBarHandler/>
//                    <Route path="/" element={<Homeapps />} />
//                    <Route path="/shop" element={<Shop />} />
//                    <Route path="/services" element={<Services />} />
//                    <Route path="/cart" element={<Cart />} />
//                    <Route path="/orders" element={<Orders />} />
//                    <Route path="/account" element={<Account />} />
//                    <Route path="/contact" element={<Contact />} />
//                    <Route path="/about" element={<About />} />
//                    <Route path="/signup" element={<Signup />} />
//                    <Route path="/login" element={<Login />} />
//                    <Route path="/product/:id" element={<Productview />} />
//                    <Route path="/checkout" element={<Checkout />} />
//                    <Route path="/wishlist" element={<Wishlist />} />
//                    <Route path="/updatep" element={<UpdateProfile />} />
//                    <Route path="/profile" element={<Profile />} />
//                    <Route path="/terms" element={<Terms />} />
//                    <Route path="/admin" element={<Dashboard />} />
//                    <Route path="/off/:id" element={<OfferProducts />} />
//                    <Route path="/addstock" element={<AddFetchProducts />} />
//                    <Route path="/dashboard" element={<Dashboard />} />
//                    <Route path="*" element={<NotFound />} />
//                    {/*<Route path="/policy" element={<PrivacyPolicy />} />*/}
//                </Routes>
//            </Card>
//        </div>
//    );
//}

// App.jsx

import { Routes, Route, useLocation } from "react-router-dom";
import Card from "./Components/Card";

import Signup from "./admin/Signup";
import Login from "./admin/Login";

import Homeapps from "./Components/Homeapps";
import Shop from "./Pages/shop";
import Services from "./Pages/services";
import Cart from "./Pages/cart";
import Orders from "./Pages/orders";
import Account from "./Pages/account";
import Contact from "./Pages/contact";
import About from "./Pages/about";
import Productview from "./Pages/Productview";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist";
import UpdateProfile from "./Pages/UpdateProfile";
import Profile from "./Pages/Profile";
import Terms from "./Pages/Terms";
import OfferProducts from "./Pages/OfferProducts";
import NotFound from "./Pages/NotFound";
import Dashboard from "./admin/Dashboard";
import AddFetchProducts from "./Pages/AddFetchProducts";

import React, { useRef, useEffect } from "react";
import LoadingBar from "react-top-loading-bar"; // ✅ Capitalized import

function LoadingBarHandler() {
    const ref = useRef(null);
    const location = useLocation();

    useEffect(() => {
        ref.current?.continuousStart();
        const timer = setTimeout(() => {
            ref.current?.complete();
        }, 500);
        return () => clearTimeout(timer);
    }, [location]);

    return (
        <LoadingBar
            color="#FFA500" // ✅ blue
            ref={ref}
            height={4}
            transitionTime={300}
        />
    );
}

export default function App() {
    return (
        <div className="h-screen w-full overflow-hidden">
            {/* ✅ Place the LoadingBarHandler above Routes so it runs on route change */}
            <LoadingBarHandler />
            <Card>
                <Routes>
                    <Route path="/" element={<Homeapps />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<Productview />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/updatep" element={<UpdateProfile />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/terms" element={<Terms />} />
                    <Route path="/admin" element={<Dashboard />} />
                    <Route path="/off/:id" element={<OfferProducts />} />
                    <Route path="/addstock" element={<AddFetchProducts />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Card>
        </div>
    );
}


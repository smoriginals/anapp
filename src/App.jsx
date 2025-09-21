// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./Components/Card";

import Homeapps from "./Components/Homeapps";
import Shop from "./Pages/shop";
import Services from "./Pages/services";
import Cart from "./Pages/cart";
import Orders from "./Pages/orders";
import Account from "./Pages/account";
import Contact from "./Pages/contact";
import About from "./Pages/about";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Productview from "./Pages/Productview";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist";
import UpdateProfile from "./Pages/UpdateProfile";
import Profile from "./Pages/Profile";
import Terms from "./Pages/Terms";
import OfferProducts from "./Pages/OfferProducts";
import NotFound from "./Pages/NotFound";
import Dashboard from "./Pages/Dashboard";
//import PrivacyPolicy from './Pages/PrivacyPolicy';
export default function App() {
    return (
        <div className="h-screen w-full overflow-hidden">
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
                    <Route path="*" element={<NotFound />} />
                    {/*<Route path="/policy" element={<PrivacyPolicy />} />*/}
                </Routes>
            </Card>
        </div>
    );
}




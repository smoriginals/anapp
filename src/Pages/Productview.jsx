//import React, { useState } from 'react';
//import { useParams,useNavigate } from 'react-router-dom';
//import { FaMoneyCheckAlt } from 'react-icons/fa';
//import { BiSolidOffer } from 'react-icons/bi';
//import ReviewCard from '../Components/ReviewCard';
//import { FaHeart } from 'react-icons/fa';


//import img1 from "../assets/1.jpg";
//import img2 from "../assets/2.jpg";
//import img3 from "../assets/3.jpg";
//import img4 from "../assets/4.jpg";
//import img5 from "../assets/5.jpg";
//import img6 from "../assets/6.jpg";
//import img7 from "../assets/7.jpg";
//import img8 from "../assets/8.jpg";
//import img9 from "../assets/9.jpg";
//import img10 from "../assets/10.jpg";
//export default function Productview() {
//    let navigate = useNavigate();
//    const { id } = useParams(); // 👈 get product id from URL

//    const myImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

//    // 👇 Use product id to pick image safely
//    const productIndex = Number(id) - 1; // if url is /product/1 → index 0
//    const defaultIndex = productIndex >= 0 && productIndex < myImages.length ? productIndex : 0;


//    const [index, setIndex] = useState(defaultIndex);
//    const [touchStartX, setTouchStartX] = useState(null);

//    const handleNext = () => {
//        setIndex((prev) => (prev + 1) % myImages.length);
//    };

//    const handlePrev = () => {
//        setIndex((prev) => (prev - 1 + myImages.length) % myImages.length);
//    };

//    // Handle finger swipe
//    const handleTouchStart = (e) => {
//        setTouchStartX(e.touches[0].clientX);
//    };

//    const handleTouchEnd = (e) => {
//        if (touchStartX === null) return;
//        const touchEndX = e.changedTouches[0].clientX;
//        const diff = touchStartX - touchEndX;

//        if (diff > 50) {
//            handleNext(); // swipe left
//        } else if (diff < -50) {
//            handlePrev(); // swipe right
//        }

//        setTouchStartX(null);
//    };

//    return (
//        <div className="py-2 px-2">
//            {/* 👇 Example of showing which product is open */}
//            <p className="text-sm text-gray-500">Product ID: {id}</p>

//            <p className="text-lg font-bold py-2">
//                Greenkin Lucky Bamboo Plant in Golden Metal Pot | Best Feng Shui Plant | Vastu Plants for Home | 2 Layer Bamboo Plant
//            </p>
//            <p className='pb-2'>
//                visit the store:{" "}
//                <a href="/" className="text-blue-600 text-sm">
//                    ALEX GARDEN
//                </a>
//            </p>

//            {/* Slider container */}
//            {/* Slider container */}
//            <div
//                className="h-96 w-full bg-green-500 rounded-sm shadow-md overflow-hidden relative"
//                onTouchStart={handleTouchStart}
//                onTouchEnd={handleTouchEnd}
//            >
//                {/* Fixed offer icon */}
//                {/*<BiSolidOffer className="group h-14 w-14 absolute top-2 left-2 z-50 text-red-500 bg-white rounded-full shadow-xl p-2" />*/}

//                {/* Images wrapper */}
//                <div
//                    className="flex h-full w-full transition-transform duration-500 ease-in-out"
//                    style={{ transform: `translateX(-${index * 100}%)` }}
//                >
//                    {myImages.map((img, i) => (
//                        <div key={i} className="h-full w-full relative flex-shrink-0">
//                            {/* Offer icon inside each image */}
//                            <BiSolidOffer className="h-14 w-14 absolute top-2 left-2 z-10 text-red-500 bg-white rounded-full shadow-xl p-2" />
//                            <img
//                                src={img}
//                                alt={`product-${i}`}
//                                className="h-full w-full object-cover"
//                            />
//                            <FaHeart className="h-10 w-10 absolute bottom-2 right-2 z-10 text-red-500 bg-white rounded-full shadow-xl p-2" />
//                        </div>
//                    ))}
//                </div>
//            </div>


//            <div className='px-2'>
//                <p className='text-5xl py-2 text-red-500'>
//                    35%
//                    <span className='px-2 text-4xl text-black'>
//                        ₹36,000
//                    </span>
//                    <span className='px-1 text-xl text-red-400 line-through'>
//                        ₹55383.61
//                    </span>
//                </p>
//                <p>Inclusive of all taxes</p>
//                <div className='flex flex-row justify-start items-center gap-2'>
//                    <FaMoneyCheckAlt className='text-md text-green-600' /><p className='text-sm'>No Cost EMI Available, EMI Starts from ₹2345</p>
//                </div>
//                <a href='/' className='text-blue-400'>EMI Options</a>
//            </div>

//            <div className="border rounded-md p-3 bg-yellow-50">
//                <h2 className="font-semibold mb-1">Available Offers</h2>
//                <ul className="text-sm list-disc pl-5 space-y-1">
//                    <li>Bank Offer: 10% Instant Discount on SBI Credit Cards</li>
//                    <li>Buy 2 Get Extra 5% Off</li>
//                    <li>Partner Offer: Get GST Invoice & Save More</li>
//                </ul>
//            </div>

//            <div className=' flex flex-col justify-center items-center gap-3 px-2 py-2'>
//                <button className='bg-green-500 h-6 w-full rounded-full py-6 text-xl flex justify-center items-center font-medium text-white' onClick={() => { navigate('/cart') }}>Add to Cart</button>
//                <button className='bg-orange-500 h-6 w-full rounded-full py-6 text-xl flex justify-center items-center font-medium text-white' onClick={() => {navigate('/checkout')}}>Buy Now</button>
//            </div>
//            <div className=' flex flex-row justify-center items-center gap-2 px-2 py-2'>
//               <ReviewCard />
//            </div>
//        </div>
//    );
//}


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import ReviewCard from "../Components/ReviewCard";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "../Contexts/WishlistContext"; // 👈 Import Wishlist context

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

export default function Productview() {
    let navigate = useNavigate();
    const { id } = useParams(); // 👈 get product id from URL
    const { addToWishlist, removeFromWishlist, wishlist } = useWishlist(); // 👈 use context

    const myImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    // 👇 Use product id to pick image safely
    const productIndex = Number(id) - 1;
    const defaultIndex = productIndex >= 0 && productIndex < myImages.length ? productIndex : 0;

    const [index, setIndex] = useState(defaultIndex);
    const [touchStartX, setTouchStartX] = useState(null);

    const handleNext = () => setIndex((prev) => (prev + 1) % myImages.length);
    const handlePrev = () => setIndex((prev) => (prev - 1 + myImages.length) % myImages.length);

    // Handle finger swipe
    const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (diff > 50) handleNext();
        else if (diff < -50) handlePrev();
        setTouchStartX(null);
    };

    // 👇 Check if product already in wishlist
    const itemAdded = wishlist.some((item) => item.id === id);

    const HandleWishlist = () => {
        const newItem = {
            id,
            name: `Product ${id}`, // You can replace with real product title later
            price: "₹36,000", // Example price (could come from API/props)
            description: "Greenkin Lucky Bamboo Plant in Golden Metal Pot",
            image: myImages[defaultIndex],
        };

        if (itemAdded) {
            removeFromWishlist(id);
        } else {
            addToWishlist(newItem);
        }
    };

    return (
        <div className="py-2 px-2">
            <p className="text-sm text-gray-500">Product ID: {id}</p>

            <p className="text-lg font-bold py-2">
                Greenkin Lucky Bamboo Plant in Golden Metal Pot | Best Feng Shui Plant | Vastu Plants for Home | 2 Layer Bamboo Plant
            </p>

            <p className="pb-2">
                visit the store:{" "}
                <a href="/" className="text-blue-600 text-sm">
                    ALEX GARDEN
                </a>
            </p>

            {/* Slider container */}
            <div
                className="h-96 w-full bg-green-500 rounded-sm shadow-md overflow-hidden relative"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Images wrapper */}
                <div
                    className="flex h-full w-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {myImages.map((img, i) => (
                        <div key={i} className="h-full w-full relative flex-shrink-0">
                            <BiSolidOffer className="h-14 w-14 absolute top-2 left-2 z-10 text-red-500 bg-white rounded-full shadow-xl p-2" />
                            <img
                                src={img}
                                alt={`product-${i}`}
                                className="h-full w-full object-cover"
                            />

                            {/* Wishlist Button */}
                            <FaHeart
                                onClick={HandleWishlist}
                                className={`h-10 w-10 absolute bottom-2 right-2 z-10 rounded-full shadow-xl p-2 cursor-pointer transition-colors 
                                    ${itemAdded ? "text-gray-400 bg-white" : "text-red-500 bg-white"}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Price + EMI */}
            <div className="px-2">
                <p className="text-5xl py-2 text-red-500">
                    35%
                    <span className="px-2 text-4xl text-black">₹36,000</span>
                    <span className="px-1 text-xl text-red-400 line-through">₹55383.61</span>
                </p>
                <p>Inclusive of all taxes</p>
                <div className="flex flex-row justify-start items-center gap-2">
                    <FaMoneyCheckAlt className="text-md text-green-600" />
                    <p className="text-sm">No Cost EMI Available, EMI Starts from ₹2345</p>
                </div>
                <a href="/" className="text-blue-400">EMI Options</a>
            </div>

            {/* Offers */}
            <div className="border rounded-md p-3 bg-yellow-50">
                <h2 className="font-semibold mb-1">Available Offers</h2>
                <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Bank Offer: 10% Instant Discount on SBI Credit Cards</li>
                    <li>Buy 2 Get Extra 5% Off</li>
                    <li>Partner Offer: Get GST Invoice & Save More</li>
                </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col justify-center items-center gap-3 px-2 py-2">
                <button
                    className="bg-green-500 h-6 w-full rounded-full py-6 text-xl flex justify-center items-center font-medium text-white"
                    onClick={() => navigate("/cart")}
                >
                    Add to Cart
                </button>
                <button
                    className="bg-orange-500 h-6 w-full rounded-full py-6 text-xl flex justify-center items-center font-medium text-white"
                    onClick={() => navigate("/checkout")}
                >
                    Buy Now
                </button>
            </div>

            {/* Reviews */}
            <div className="flex flex-row justify-center items-center gap-2 px-2 py-2">
                <ReviewCard />
            </div>
        </div>
    );
}

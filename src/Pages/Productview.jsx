import React, { useState } from 'react';
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
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { BiSolidOffer } from 'react-icons/bi';

export default function Productview() {
    const myImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const [index, setIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(null);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % myImages.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + myImages.length) % myImages.length);
    };

    // Handle finger swipe
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (diff > 50) {
            handleNext(); // swipe left
        } else if (diff < -50) {
            handlePrev(); // swipe right
        }

        setTouchStartX(null);
    };

    return (
        <div className="py-2 px-2">
            <p className="text-lg font-bold py-2">
                Greenkin Lucky Bamboo Plant in Golden Metal Pot | Best Feng Shui Plant | Vastu Plants for Home | 2 Layer Bamboo Plant
            </p>
            <p className='pb-2'>
                visit the store:{" "}
                <a href="/" className="text-blue-600 text-sm">
                    ALEX GARDEN
                </a>
            </p>

            {/* Slider container */}
            {/* Slider container */}
            <div
                className="h-96 w-full bg-green-500 rounded-sm shadow-md overflow-hidden relative"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Fixed offer icon */}
                <BiSolidOffer className="h-14 w-14 absolute top-2 left-2 z-50 text-red-500 bg-white rounded-full shadow-xl p-2" />

                {/* Images wrapper */}
                <div
                    className="flex h-full w-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {myImages.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`product-${i}`}
                            className="h-full w-full object-cover flex-shrink-0"
                        />
                    ))}
                </div>
            </div>


            <div className='px-2'>
                <p className='text-5xl py-2 text-red-500'>
                    35%
                    <span className='px-2 text-4xl text-black'>
                        ₹36,000
                    </span>
                    <span className='px-1 text-xl text-red-400 line-through'>
                        ₹55383.61
                    </span>
                </p>
                <p>Inclusive of all taxes</p>
                <div className='flex flex-row justify-start items-center gap-2'>
                    <FaMoneyCheckAlt className='text-xl text-green-600' /><p>No Cost EMI Available, EMI Starts from ₹2345</p>
                </div>
                <a href='/' className='text-blue-400'>EMI Options</a>
            </div>

            <div className="border rounded-md p-3 bg-yellow-50">
                <h2 className="font-semibold mb-1">Available Offers</h2>
                <ul className="text-sm list-disc pl-5 space-y-1">
                    <li>Bank Offer: 10% Instant Discount on SBI Credit Cards</li>
                    <li>Buy 2 Get Extra 5% Off</li>
                    <li>Partner Offer: Get GST Invoice & Save More</li>
                </ul>
            </div>

            <div className=' bg-gray-50 flex flex-col justify-center items-center gap-2 py-2'>
                <button className='bg-green-400 h-6 w-96 rounded-full border-2 border-black py-5 text-xl flex justify-center items-center'>Add to Cart</button>
                <button className='bg-green-400 h-6 w-96 rounded-full border-2 border-black py-5 text-xl flex justify-center items-center'>Buy Now</button>
            </div>
        </div>
    );
}

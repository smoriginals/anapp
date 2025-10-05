import React, { useState } from "react";
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
import { useParams, useNavigate } from "react-router-dom";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import ReviewCard from "../Components/ReviewCard";

//this card is open whenthe use click on any offerproducts like mini herobars or herobars items

export default function OfferProducts() {
    let navigate = useNavigate();
    const { id } = useParams();

    const myImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    const productIndex = Number(id) - 1;
    const defaultIndex =
        productIndex >= 0 && productIndex < myImages.length ? productIndex : 0;

    const [index, setIndex] = useState(defaultIndex);
    const [touchStartX, setTouchStartX] = useState(null);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % myImages.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + myImages.length) % myImages.length);
    };

    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (diff > 50) {
            handleNext();
        } else if (diff < -50) {
            handlePrev();
        }

        setTouchStartX(null);
    };

    return (
        <div className="py-4 px-4 max-w-5xl mx-auto">
            {/* Product Title */}
            <p className="text-sm text-gray-500">Product ID: {id}</p>
            <h1 className="text-2xl md:text-3xl font-bold py-2 text-gray-800 leading-snug">
                Greenkin Lucky Bamboo Plant in Golden Metal Pot | Feng Shui Plant | 2
                Layer Bamboo Plant
            </h1>
            <p className="pb-2">
                Visit the store:{" "}
                <a href="/" className="text-blue-600 font-medium">
                    ALEX GARDEN
                </a>
            </p>

            {/* Image Slider */}
            <div
                className="h-96 w-full bg-gray-100 rounded-lg shadow-md overflow-hidden relative"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex h-full w-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {myImages.map((img, i) => (
                        <div key={i} className="h-full w-full relative flex-shrink-0">
                            <BiSolidOffer className="h-14 w-14 absolute top-3 left-3 z-10 text-red-600 bg-white rounded-full shadow-lg p-2" />
                            <img
                                src={img}
                                alt={`product-${i}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Price Section */}
            <div className="px-2 mt-4">
                <p className="text-5xl font-extrabold text-red-600 flex items-center gap-3">
                    90% OFF
                    <span className="text-3xl text-black">₹3,600</span>
                    <span className="text-xl text-gray-400 line-through">₹36,000</span>
                </p>
                <p className="text-sm text-gray-600 mt-1">Inclusive of all taxes</p>
                <div className="flex items-center gap-2 mt-2">
                    <FaMoneyCheckAlt className="text-lg text-green-600" />
                    <p className="text-sm text-gray-700">
                        No Cost EMI Available, Starts from ₹345/month
                    </p>
                </div>
                <a href="/" className="text-blue-500 text-sm underline">
                    View EMI Options
                </a>
            </div>

            {/* Offers Section */}
            <div className="border rounded-md p-4 bg-yellow-50 mt-5 shadow-sm">
                <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <BiSolidOffer className="text-red-500" /> Available Offers
                </h2>
                <ul className="text-sm list-disc pl-6 space-y-1 text-gray-700">
                    <li>Bank Offer: 10% Instant Discount on SBI Credit Cards</li>
                    <li>Buy 2 Get Extra 5% Off</li>
                    <li>Partner Offer: Get GST Invoice & Save More</li>
                </ul>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 px-2 py-6">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white w-full md:w-60 rounded-full py-3 text-lg font-semibold shadow-md"
                    onClick={() => {
                        navigate("/cart");
                    }}
                >
                    Add to Cart
                </button>
                <button
                    className="bg-orange-500 hover:bg-orange-600 text-white w-full md:w-60 rounded-full py-3 text-lg font-semibold shadow-md"
                    onClick={() => {
                        navigate("/checkout");
                    }}
                >
                    Buy Now
                </button>
            </div>

            {/* Reviews */}
            <div className="px-2 py-4">
                <h2 className="text-xl font-semibold mb-3">Customer Reviews</h2>
                <ReviewCard />
            </div>
        </div>
    );
}

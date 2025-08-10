import React from 'react';
import a from '../assets/a.jpeg';
import { FaHeart } from 'react-icons/fa';


export default function ItemCard() {
    return (
        <>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Image container with fixed height */}
                <div className="relative w-full h-40 ">
                    <img
                        src={a}
                        alt="Card Image"
                        className="w-full h-full object-contain shadow-md"
                    />
                    {/* Like Button */}
                    <button className="absolute h-8 w-8 top-1 right-1 bg-gray-100 rounded-full flex justify-center items-center shadow-lg">
                        <FaHeart className="text-red-500 text-lg" />
                    </button>
                </div>

                {/* Title */}
                <div className="p-2">
                    <h2 className="text-lg font-semibold mb-1">Card Title</h2>
                    <p className="text-gray-600 text-sm">
                        This is a short description for the card.
                    </p>
                </div>
            </div>
        </>
    )
}
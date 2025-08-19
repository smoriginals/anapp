import React from 'react';
import a from '../assets/a.jpeg';
import { FaHeart } from 'react-icons/fa';


export default function ItemCard(props) {
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
                    <h2 className="text-md font-semibold mb-1">{props.title}</h2>
                    <p className="text-gray-600 text-sm">
                        {props.desc}
                    </p>
                </div>
            </div>
        </>
    )
}
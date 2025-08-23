import React from 'react';
import a from '../assets/a.jpeg';
import { FaHeart } from 'react-icons/fa';


export default function ItemCard(props) {
    return (
        <>
            <div className="overflow-hidden rounded-lg bg-white shadow-md">
                {/* Image container with fixed height */}
                <div className="relative h-40 w-full">
                    <img
                        src={a}
                        alt="Card Image"
                        className="h-full w-full object-contain shadow-md"
                    />
                    {/* Like Button */}
                    <button className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 shadow-lg">
                        <FaHeart className="text-lg text-red-500" />
                    </button>
                </div>

                {/* Title */}
                <div className="p-2">
                    <h2 className="text-md mb-1 font-semibold">{props.title}</h2>
                    <p className="text-sm text-gray-600">
                        {props.desc}
                    </p>
                </div>
            </div>
        </>
    )
}
import React from 'react';
import a from '../assets/a.jpeg';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ItemCard({ id, title, description }) {

    
    function HandleWishlist(e) {
        e.stopPropagation(); // Prevent card click
        e.preventDefault(); // Prevent navigation
        console.log("Liked item:", id)  /*Later this use to connect with backend*/
    }
   

    return (
        <>
            <Link to={`/product/${id}`}>  {/* 👈 clicking the card opens product view */}

                <div className="overflow-hidden rounded-lg bg-white shadow-md cursor-pointer">
                    {/* Image container with fixed height */}
                    <div className="relative h-40 w-full">
                        <img
                            src={a}
                            alt="Card Image"
                            className="h-full w-full object-contain shadow-md"
                        />
                        {/* Like Button */}
                        <button className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200"
                            onClick={HandleWishlist}  /*Later this use to connect with backend*/
                        >

                            <FaHeart className="text-sm text-red-500" />
                        </button>
                    </div>

                    {/* Title */}
                    <div className="p-2">
                        <h2 className="text-md mb-1 font-semibold">{title}</h2>
                        <p className="text-sm text-gray-600">
                            {description}

                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}
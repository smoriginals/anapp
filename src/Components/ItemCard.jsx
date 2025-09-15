//import React from 'react';
//import a from '../assets/a.jpeg';
//import { FaHeart } from 'react-icons/fa';
//import { BsStarHalf } from 'react-icons/bs';
//import { Link } from 'react-router-dom';
//import { useWishlist } from '../Contexts/WishlistContext'; // 👈 import
//import { useState,useEffect } from 'react';
//import { MdStars } from 'react-icons/md';
//export default function ItemCard({ id, title, description,price ,image}) {

//    const { addToWishlist, wishlist, removeFromWishlist } = useWishlist();

//    const [itemAdded, setItemAdded] = useState(false);

//    // ✅ Keep local state in sync with wishlist
//    useEffect(() => {
//        setItemAdded(wishlist.some((item) => item.id === id));
//    }, [wishlist, id]);

//    function HandleWishlist(e) {
//        e.stopPropagation(); // Prevent card click
//        e.preventDefault(); // Prevent navigation
//        console.log("Liked item:", id)  /*Later this use to connect with backend*/

//        const newItem = {
//            id,
//            name: title,
//            price: "$10", // You can pass actual price later
//            description,
//            image,
//        };

//        //addToWishlist(newItem); // 👈 add item
//        //setItemAdded(true);
//        if (itemAdded) {
//            removeFromWishlist(id);  // 👈 remove if already added
//        } else {
//            addToWishlist(newItem);  // 👈 add if not in wishlist
//        }
//    }


//    return (
//        <>
//            <Link to={`/product/${id}`}>  {/* 👈 clicking the card opens product view */}

//                <div className="overflow-hidden rounded-lg bg-white shadow-md cursor-pointer">
//                    {/* Image container with fixed height */}
//                    <div className="relative h-40 w-full">
//                        <img
//                            src={a}
//                            alt="Card Image"
//                            className="h-full w-full object-contain shadow-md"
//                        />
//                        {/* Like Button */}
//                        <button className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200"
//                            onClick={HandleWishlist}  /*Later this use to connect with backend*/
//                        >

//                            <FaHeart className={`text-sm ${itemAdded ?'text-gray-500':'text-red-500'}`} />
//                        </button>

//                        <button className="absolute right-1 -bottom-7 flex h-6 w-6 items-center justify-center rounded-full">
//                            <MdStars className='text-orange-500 text-2xl' />
//                        </button>
//                    </div>

//                    {/* Title */}
//                    <div className="p-2">
//                        <h2 className="text-md mb-1 font-semibold">{title}</h2>
//                        <p className="text-sm text-gray-600">
//                            {description}
//                        </p>
//                        <p className="text-xl font-bold text-gray-700">
//                            ${price}.00
//                        </p>

//                    </div>
//                </div>
//            </Link>
//        </>
//    )
//}

import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWishlist } from "../Contexts/WishlistContext";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function ItemCard({
    id,
    title,
    description,
    price,
    image,
    rating = 4.5,   // 👈 Default rating
    reviews = 120,  // 👈 Default review count

})

    {
    const { addToWishlist, wishlist, removeFromWishlist } = useWishlist();
    const [itemAdded, setItemAdded] = useState(false);

    // ✅ Keep local state in sync with wishlist
    useEffect(() => {
        setItemAdded(wishlist.some((item) => item.id === id));
    }, [wishlist, id]);

    function HandleWishlist(e) {
        e.stopPropagation();
        e.preventDefault();

        const newItem = {
            id,
            name: title,
            price,
            description,
            image,
        };

        if (itemAdded) {
            removeFromWishlist(id);
        } else {
            addToWishlist(newItem);
        }
    }

    // ⭐ Render rating stars
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalf = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<BsStarFill key={`full-${i}`} className="text-yellow-500" />);
        }
        if (hasHalf) {
            stars.push(<BsStarHalf key="half" className="text-yellow-500" />);
        }
        while (stars.length < 5) {
            stars.push(<BsStar key={`empty-${stars.length}`} className="text-gray-300" />);
        }
        return stars;
    };

    return (
        <Link to={`/product/${id}`}>
            <div className="overflow-hidden rounded-lg bg-white shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
                {/* Image container */}
                <div className="relative h-48 w-full">
                    <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover"
                    />

                    {/* Wishlist Button */}
                    <button
                        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
                        onClick={HandleWishlist}
                    >
                        <FaHeart
                            className={`text-lg transition-colors ${itemAdded ? "text-gray-400" : "text-red-600"
                                }`}
                        />
                    </button>

                </div>

                {/* Info Section */}
                <div className="p-3">
                    <h2 className="text-md font-semibold truncate">{title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mt-1">
                        {renderStars()}
                        <span className="text-xs text-gray-500">({reviews})</span>
                    </div>

                    {/* Price */}
                    <p className="text-xl font-bold text-gray-800 mt-2">${price}.00</p>
                </div>
            </div>
        </Link>
    );
}


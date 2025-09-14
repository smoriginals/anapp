import React from 'react';
import a from '../assets/a.jpeg';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useWishlist } from '../Contexts/WishlistContext'; // 👈 import
import { useState,useEffect } from 'react';

export default function ItemCard({ id, title, description,price ,image}) {

    const { addToWishlist, wishlist, removeFromWishlist } = useWishlist();

    const [itemAdded, setItemAdded] = useState(false);

    // ✅ Keep local state in sync with wishlist
    useEffect(() => {
        setItemAdded(wishlist.some((item) => item.id === id));
    }, [wishlist, id]);

    function HandleWishlist(e) {
        e.stopPropagation(); // Prevent card click
        e.preventDefault(); // Prevent navigation
        console.log("Liked item:", id)  /*Later this use to connect with backend*/

        const newItem = {
            id,
            name: title,
            price: "$10", // You can pass actual price later
            description,
            image,
        };

        //addToWishlist(newItem); // 👈 add item
        //setItemAdded(true);
        if (itemAdded) {
            removeFromWishlist(id);  // 👈 remove if already added
        } else {
            addToWishlist(newItem);  // 👈 add if not in wishlist
        }
    }
   

    return (
        <>
            <Link to={`/product/${id}`}>  {/* 👈 clicking the card opens product view */}

                <div className="overflow-hidden rounded-lg bg-white shadow-md cursor-pointer">
                    {/* Image container with fixed height */}
                    <div className="relative h-40 w-full">
                        <img
                            src={image}
                            alt="Card Image"
                            className="h-full w-full object-contain shadow-md"
                        />
                        {/* Like Button */}
                        <button className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200"
                            onClick={HandleWishlist}  /*Later this use to connect with backend*/
                        >

                            <FaHeart className={`text-sm ${itemAdded ?'text-gray-500':'text-red-500'}`} />
                        </button>
                    </div>

                    {/* Title */}
                    <div className="p-2">
                        <h2 className="text-md mb-1 font-semibold">{title}</h2>
                        <p className="text-sm text-gray-600">
                            {description}

                        </p>
                        <p className="text-xl font-bold text-gray-700">
                            ${price}.00
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}

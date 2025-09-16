import React, { } from "react";
import { useWishlist } from '../Contexts/WishlistContext';
import { Link } from 'react-router-dom';
export default function Wishlist() {

    const { wishlist, removeFromWishlist } = useWishlist();

    return (
        <div className="px-6 py-4">
            <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>

            {wishlist.length === 0 ? (<p className="text-gray-500">Your wishlist is Empty.</p>) : (
                <ul className="space-y-3">
                    {wishlist.map((item) => (

                        <li
                            key={item.id}
                            className="flex justify-between items-center bg-red-100 border rounded-md px-4 py-2"
                        >
                            {/*<div className='bg-red-500'>*/}
                            <Link
                                /* 👇 Wrap image + info in Link */
                                to={`/product/${item.id}`}
                                className="flex items-center gap-3 flex-1"
                            >
                                <img src={item.image} alt={item.name} className=" w-16 h-16 object-cover rounded-md" />

                                {/*</div>*/}
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-gray-600">{item.price}</p>
                                </div>
                            </Link>
                            <button
                                onClick={() => removeFromWishlist(item.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

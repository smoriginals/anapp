import React, { useState } from "react";

export default function Wishlist() {
    const [wishlist, setWishlist] = useState([
        { id: 1, name: "Red Rose", price: "$10" },
        { id: 2, name: "Lavender", price: "$15" },
        { id: 3, name: "Sunflower", price: "$8" },
    ]);

    const removeFromWishlist = (id) => {
        setWishlist(wishlist.filter((item) => item.id !== id));
    };

    return (
        <div className="px-6 py-4">
            <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>

            {wishlist.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
                <ul className="space-y-3">
                    {wishlist.map((item) => (
                        <li
                            key={item.id}
                            className="flex justify-between items-center border rounded-md px-4 py-2"
                        >
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-gray-600">{item.price}</p>
                            </div>
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

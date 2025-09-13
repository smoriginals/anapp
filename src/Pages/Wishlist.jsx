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





// // src/pages/Wishlist.jsx
// import React, { useEffect, useState } from "react";

// // Sample data — simulate from database
// // Replace with fetched data from backend when ready
// const PRODUCT_DATA = [
//     { id: 1, name: "Red Rose", price: "$10" },
//     { id: 2, name: "Lavender", price: "$15" },
//     { id: 3, name: "Sunflower", price: "$8" },
//     { id: 4, name: "Orchid", price: "$12" },
//     { id: 5, name: "Tulip", price: "$9" },
// ];

// export default function Wishlist() {
//     const [wishlistItems, setWishlistItems] = useState([]);

//     useEffect(() => {
//         const storedIds = JSON.parse(localStorage.getItem("wishlist") || "[]");
//         const matchedItems = PRODUCT_DATA.filter(product =>
//             storedIds.includes(product.id)
//         );
//         setWishlistItems(matchedItems);

//         // ========================
//         // BACKEND PLACEHOLDER
//         // You could fetch actual wishlist items like:
//         // fetch('/api/user/wishlist')
//         //   .then(res => res.json())
//         //   .then(data => setWishlistItems(data));
//         // ========================
//     }, []);

//     const removeFromWishlist = (id) => {
//         const updated = wishlistItems.filter((item) => item.id !== id);
//         setWishlistItems(updated);
//         localStorage.setItem("wishlist", JSON.stringify(updated.map(item => item.id)));

//         // ========================
//         // BACKEND PLACEHOLDER
//         // await fetch(`/api/wishlist/${id}`, { method: 'DELETE' });
//         // ========================
//     };

//     return (
//         <div className="px-6 py-4">
//             <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>

//             {wishlistItems.length === 0 ? (
//                 <p className="text-gray-500">Your wishlist is empty.</p>
//             ) : (
//                 <ul className="space-y-3">
//                     {wishlistItems.map((item) => (
//                         <li
//                             key={item.id}
//                             className="flex justify-between items-center border rounded-md px-4 py-2"
//                         >
//                             <div>
//                                 <p className="font-semibold">{item.name}</p>
//                                 <p className="text-gray-600">{item.price}</p>
//                             </div>
//                             <button
//                                 onClick={() => removeFromWishlist(item.id)}
//                                 className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                             >
//                                 Remove
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }

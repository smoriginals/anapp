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




// // src/components/ItemCard.jsx
// import React, { useEffect, useState } from 'react';
// import { FaHeart } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import a from '../assets/a.jpeg'; // Replace with actual product image

// export default function ItemCard({ id, title, description }) {
//     const [isWishlisted, setIsWishlisted] = useState(false);

//     useEffect(() => {
//         const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
//         setIsWishlisted(wishlist.includes(id));
//     }, [id]);

//     function handleWishlist(e) {
//         e.stopPropagation();
//         e.preventDefault();

//         const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
//         const alreadyInWishlist = wishlist.includes(id);
//         let updatedWishlist;

//         if (alreadyInWishlist) {
//             updatedWishlist = wishlist.filter(itemId => itemId !== id);
//         } else {
//             updatedWishlist = [...wishlist, id];
//         }

//         localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//         setIsWishlisted(!alreadyInWishlist);

//         // ========================
//         // BACKEND PLACEHOLDER
//         // Here, call your API:
//         // if (alreadyInWishlist) {
//         //     await fetch(`/api/wishlist/${id}`, { method: 'DELETE' });
//         // } else {
//         //     await fetch('/api/wishlist', {
//         //         method: 'POST',
//         //         body: JSON.stringify({ productId: id }),
//         //         headers: { 'Content-Type': 'application/json' }
//         //     });
//         // }
//         // ========================
//     }

//     return (
//         <Link to={`/product/${id}`}>
//             <div className="overflow-hidden rounded-lg bg-white shadow-md cursor-pointer hover:shadow-lg transition">
//                 {/* Image */}
//                 <div className="relative h-40 w-full">
//                     <img
//                         src={a}
//                         alt={title}
//                         className="h-full w-full object-contain shadow-md"
//                     />
//                     {/* Wishlist Heart */}
//                     <button
//                         onClick={handleWishlist}
//                         className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow"
//                     >
//                         <FaHeart className={`text-sm ${isWishlisted ? "text-red-500" : "text-gray-400"}`} />
//                     </button>
//                 </div>

//                 {/* Title & Description */}
//                 <div className="p-2">
//                     <h2 className="text-md mb-1 font-semibold">{title}</h2>
//                     <p className="text-sm text-gray-600">{description}</p>
//                 </div>
//             </div>
//         </Link>
//     );
// }

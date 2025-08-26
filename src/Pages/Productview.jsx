import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Productview() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Sample Product Data (replace with API data later)
    const products = [
        {
            id: "1",
            name: "Wedding Stage Decor",
            price: "₹15,000",
            images: [
                "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
                "https://images.unsplash.com/photo-1604014238174-cc04a31cf4c4"
            ],
            description: "Elegant wedding stage setup with premium floral arrangements and lighting. Perfect for grand weddings with a royal touch.",
            features: [
                "Premium quality flowers",
                "Customizable themes",
                "Includes lighting and backdrop"
            ]
        },
        {
            id: "2",
            name: "Birthday Party Setup",
            price: "₹5,000",
            images: [
                "https://images.unsplash.com/photo-1569864358642-9d6e4840f67d",
                "https://images.unsplash.com/photo-1603791452906-b8b18d2dbfa9"
            ],
            description: "Colorful decoration for birthdays with balloons, lights, and theme-based decor.",
            features: [
                "Theme-based decorations",
                "Free cake table setup",
                "Includes lighting"
            ]
        }
    ];

    const product = products.find((p) => p.id === id);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center text-xl font-bold">
                Product Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
                ← Back
            </button>

            {/* Product Section */}
            <div className="flex flex-col md:flex-row gap-6">
                {/* Left - Images */}
                <div className="w-full md:w-1/2">
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                    />
                    <div className="flex gap-2 mt-3">
                        {product.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt="preview"
                                className="w-20 h-20 object-cover rounded-lg border"
                            />
                        ))}
                    </div>
                </div>

                {/* Right - Details */}
                <div className="w-full md:w-1/2 flex flex-col">
                    <h1 className="text-4xl font-bold">{product.name}</h1>
                    <p className="text-orange-500 font-bold text-3xl my-4">{product.price}</p>
                    <p className="text-gray-700 mb-4">{product.description}</p>

                    <ul className="list-disc list-inside mb-4">
                        {product.features.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>

                    <button
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition"
                        onClick={() => alert(`Booked ${product.name}`)}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
}

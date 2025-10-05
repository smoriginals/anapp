import React, { useState } from 'react';

export default function Dashboard() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [productPhotos, setProductPhotos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            productName,
            description,
            price,
            stock,
            thumbnail,
            productPhotos,
        });
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Grid: Left form + Right thumbnail */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left side: inputs */}
                    <div className="space-y-4">
                        <div>
                            <label className="block font-medium text-sm">Title of Product</label>
                            <input
                                type="text"
                                placeholder="Enter Product Name"
                                className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-sm">Description of Product</label>
                            <input
                                type="text"
                                placeholder="Enter Product Description"
                                className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-sm">Price of Product</label>
                            <input
                                type="number"
                                placeholder="Enter Price"
                                className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block font-medium text-sm">Stock of Product</label>
                            <input
                                type="number"
                                placeholder="Enter Stock Amount"
                                className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Right side: thumbnail uploader */}
                    <div>
                        <label className="block font-medium text-sm mb-2">
                            Add a Product Thumbnail
                        </label>
                        <div className="h-72 w-full rounded-md p-2 border-2 border-dashed border-gray-400 flex justify-center items-center">
                            <button
                                type="button"
                                className="bg-gray-200 h-40 w-40 rounded-md p-2"
                            >
                                Upload Thumbnail
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Photos + Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* Product Photos */}
                    <div>
                        <label className="block font-medium text-sm mb-2">Add Product Photos</label>
                        <div className="flex flex-wrap gap-2 border-2 border-dashed border-gray-400 p-2 rounded-md">
                            {Array.from({ length: 6 }, (_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    className="bg-gray-200 h-20 w-20 rounded-md p-2"
                                >
                                    Photo {i + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block font-medium text-sm mb-2">
                            Select Product Category
                        </label>
                        <div className="relative w-full">
                            <select className="p-2 appearance-none rounded-md border-2 border-blue-400 w-full pr-10">
                                <option>Night</option>
                                <option>Morning</option>
                                <option>Evening</option>
                                <option>Summer</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                <svg
                                    className="h-5 w-5 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Tag */}
                <div>
                    <label className="block font-medium text-sm">Add Product Tag</label>
                    <input
                        type="text"
                        placeholder="Enter Product Photos URLs"
                        className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                        value={productPhotos}
                        onChange={(e) => setProductPhotos(e.target.value)}
                    />
                </div>

                {/* Submit */}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
                    >
                        Save & Add
                    </button>
                </div>
            </form>
        </div>
    );
}


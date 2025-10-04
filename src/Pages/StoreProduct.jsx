import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from 'react-icons/ai';
import { FaStore } from 'react-icons/fa';

export default function StoreProduct() {
    return (
        <div className="p-2">
           
            <div className="group relative flex bg-white shadow-md rounded-md overflow-hidden cursor-pointer
                             h-32 w-full transition-all duration-200 ease-in-out">


                {/* Center Edit Button on Hover */}
                <div className="gap-2 absolute inset-0 hidden group-hover:flex justify-center items-center bg-white/80 z-10 ">
                    <AiFillEdit
                        className="text-4xl text-green-500 hover:text-orange-500 cursor-pointer"
                        title="Edit"
                        onClick={() => { console.log('clicked') }} />

                    <AiFillDelete
                        className="text-4xl text-red-600 hover:text-blue-600 cursor-pointer"
                        title="Delete"
                        onClick={() => { console.log('Delete') }} />

                    <FaStore
                        className="text-4xl text-black hover:text-green-500 cursor-pointer"
                        title="Add to Store"
                        onClick={() => { console.log('Add') }} />
                </div>

                {/* Card Content */}
                <div className="flex flex-row justify-between items-center gap-1 w-full group-hover:opacity-100 transition-opacity duration-200">
                    {/* Thumbnail */}
                    <div className="h-32 w-24 bg-gray-300 p-2 flex justify-center items-center bg-cover">
                        Thumbnail
                    </div>

                    {/* Details */}
                    <div className="h-32 w-full bg-blue-300 p-2">
                        <p className="text-sm text-gray-500">Product Id: #32BX4569AC</p>
                        <p className="text-sm font-medium">Product Name: Example Product</p>
                        <p className="text-sm font-medium">Price: $99.99</p>
                        <p className="text-sm font-medium">Stock: 50</p>
                        <p className="text-sm font-medium">Category: Electronics</p>
                    </div>
                </div>
            </div>
        </div>
    );
}


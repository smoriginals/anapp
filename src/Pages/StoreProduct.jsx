import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdDeleteSweep } from "react-icons/md";

export default function StoreProduct() {
    return (
        <div className="p-2">
            <div
                className="flex bg-white shadow-md rounded-md overflow-hidden cursor-pointer
        h-32 w-72 active:h-44 active:w-96 transition-all duration-200 ease-in-out"
            >
                {/* Left Side - Thumbnail */}
                <div className="w-24 h-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400 text-xs">Thumbnail</span>
                </div>

                {/* Right Side - Buttons + Details */}
                <div className="flex-1 flex flex-col p-2 text-xs">
                    {/* Buttons */}
                    <div className="flex justify-end mb-1 space-x-1">
                        <button className="p-1 bg-blue-500 text-white rounded-md text-xs">
                            <LiaEditSolid />
                        </button>
                        <button className="p-1 bg-red-500 text-white rounded-md text-xs">
                            <MdDeleteSweep />
                        </button>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 flex-1">
                        <div>
                            <span className="font-semibold">Title:</span> Aloe Vera
                        </div>
                        <div>
                            <span className="font-semibold">Description:</span> Indoor Plant
                        </div>
                        <div>
                            <span className="font-semibold">Stock:</span> 25
                        </div>
                        <div>
                            <span className="font-semibold">Category:</span> Medicinal
                        </div>
                        <div>
                            <span className="font-semibold">Price:</span> ₹199
                        </div>
                        <div>
                            <span className="font-semibold">Tags:</span> Fresh, Green
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

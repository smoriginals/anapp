import React from "react";
import { MdAdd } from 'react-icons/md';
import Spinner from "../Components/Spinner";
import ItemCard from "../Components/ItemCard";
import StoreProduct from "./StoreProduct";
export default function AddFetchProduct() {

    return (
        <>
            <div>
                <div className='h-full w-full bg-gray-100 flex justify-center items-start px-2'>
                    <div className='bg-gray-200 h-96 w-full my-4 rounded-xl border-2 border-dashed border-gray-600 flex justify-center items-center' >
                        <button className='h-40 w-40 bg-gray-100 rounded-xl shadow-xl flex justify-center items-center border border-gray-500 border-dashed' title='Add Product'>
                            <MdAdd className='text-9xl font-bold text-gray-400 hover:text-blue-500 transition-all duration-300 ease-in-out' />
                        </button>
                    </div>
                </div>

                <div className='h-full w-full bg-gray-100 flex justify-center items-center flex-col px-2'>
                    <div className='bg-gray-200 h-96 w-full my-4 rounded-xl border-2 border-dashed border-gray-600 gap-2'>
                        <StoreProduct />
                    </div>
                </div>
            </div>



        </>
    )
}
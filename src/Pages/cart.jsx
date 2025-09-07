import React from "react";
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import CartCard from '../Components/CartCard';
import { useNavigate } from 'react-router-dom';
export default function Cart() {

    const navigate = useNavigate();

    return (
        <>
    
            <div className='py-6'>
                <div className='relative left-0 top-2 flex items-center justify-center text-4xl'>
                    <HiOutlineShoppingBag className='shadow-xl' />
                    <h1>My Cart</h1>
                </div>
            </div>
            <div className='pt-2 pb-4 px-2'>
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
            </div>
            <div className='flex justify-center items-center pb-6'>
                <button className="rounded-full bg-green-400 w-60 p-4 text-xl font-bold" onClick={() => { navigate('/checkout') }}>CHECKOUT</button>
            </div>
        </>
    )
    
}

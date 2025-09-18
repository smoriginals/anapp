import React from "react";
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import CartCard from '../Components/CartCard';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Contexts/CartContext'; // 👈 Import Cart context
export default function Cart() {

    const { cart, removeFromCart } = useCart();
    const navigate = useNavigate();

    return (
        <>
    
            {/*
           
            <div className='pt-2 pb-4 px-2'>
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
            </div>
            <div className='flex justify-center items-center pb-6'>
                <button className="rounded-full bg-green-400 w-60 p-4 text-xl font-bold" onClick={() => { navigate('/checkout') }}>CHECKOUT</button>
            </div>
            */}
            
            <div className='py-6'>
                <div className='relative left-0 top-2 flex items-center justify-center text-4xl'>
                    <HiOutlineShoppingBag className='shadow-xl' />
                    <h1>My Cart</h1>
                </div>
            </div>

                <div className="pt-2 pb-4 px-2 space-y-4">
                    {cart.length === 0 ? (
                        <p className="text-gray-500 text-center">Your cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border p-3 rounded-md"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-md"
                                    />
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-gray-600">{item.price}</p>
                                        <p className="text-sm">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="flex justify-center items-center pb-6">
                        <button
                            className="rounded-full bg-green-400 w-60 p-4 text-xl font-bold"
                            onClick={() => navigate("/checkout")}
                        >
                            CHECKOUT
                        </button>
                    </div>
                )}
            
        </>
    )
    
}

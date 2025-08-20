import React, { useState } from "react";

export default function Cart() {
    // sample cart data (in real case, fetch from context / backend)
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "Plant A",
            price: 250,
            qty: 1,
            image: "https://via.placeholder.com/100", // replace with your asset
        },
        {
            id: 2,
            title: "Plant B",
            price: 400,
            qty: 2,
            image: "https://via.placeholder.com/100",
        },
    ]);

    // increase qty
    const increaseQty = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, qty: item.qty + 1 } : item
            )
        );
    };

    // decrease qty
    const decreaseQty = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.qty > 1
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
    };

    // remove item
    const removeItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    // total
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    return (
        <>
        <div className="bg-gray-100 min-h-screen px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-center text-gray-600">Your cart is empty 🛒</p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center bg-white p-4 rounded-xl shadow-md"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-20 h-20 rounded-lg object-cover"
                                />

                                <div className="ml-4 flex-1">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">₹{item.price}</p>

                                    {/* Qty controls */}
                                    <div className="flex items-center gap-3 mt-2">
                                        <button
                                            onClick={() => decreaseQty(item.id)}
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            -
                                        </button>
                                        <span>{item.qty}</span>
                                        <button
                                            onClick={() => increaseQty(item.id)}
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Remove button */}
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 font-semibold hover:underline ml-4"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="bg-white p-6 rounded-xl shadow-md h-fit">
                        <h3 className="text-xl font-bold mb-4">Summary</h3>
                        <p className="flex justify-between mb-2">
                            <span>Subtotal</span>
                            <span>₹{totalPrice}</span>
                        </p>
                        <p className="flex justify-between mb-2">
                            <span>Shipping</span>
                            <span>₹50</span>
                        </p>
                        <hr className="my-2" />
                        <p className="flex justify-between font-bold text-lg">
                            <span>Total</span>
                            <span>₹{totalPrice + 50}</span>
                        </p>
                        <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
        </>
    );
}

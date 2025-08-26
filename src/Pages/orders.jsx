import React from "react";

export default function Orders() {
    const orders = [
        {
            id: 1,
            name: "Indoor Plant - Monstera",
            price: "$25.00",
            oldPrice: "$30.00",
            status: "Delivered",
            image: "https://via.placeholder.com/100",
        },
        {
            id: 2,
            name: "Ceramic Pot",
            price: "$15.00",
            oldPrice: "$20.00",
            status: "Processing",
            image: "https://via.placeholder.com/100",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">My Orders</h2>

            <div className="max-w-3xl mx-auto space-y-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="flex items-center bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
                    >
                        <img
                            src={order.image}
                            alt={order.name}
                            className="w-20 h-20 rounded-md object-cover"
                        />
                        <div className="flex-1 ml-4">
                            <h3 className="text-lg font-semibold">{order.name}</h3>
                            <p className="text-gray-500">
                                <span className="line-through mr-2">{order.oldPrice}</span>
                                <span className="text-green-600 font-bold">{order.price}</span>
                            </p>
                            <p
                                className={`mt-1 text-sm font-medium ${order.status === "Delivered"
                                        ? "text-green-500"
                                        : "text-yellow-500"
                                    }`}
                            >
                                {order.status}
                            </p>
                        </div>
                        <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            View
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

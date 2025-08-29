import React from "react";
import { FaCreditCard, FaMoneyBillWave } from "react-icons/fa";

export default function Checkout() {
    return (
        <>

            {/* Payment Options */}
            <div>
                <h2 className="text-lg font-semibold mb-3">Payment Method</h2>
                <div className="space-y-2">
                    <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                        <input type="radio" name="payment" className="accent-green-600" />
                        <FaCreditCard className="text-green-600" />
                        <span>Credit / Debit Card</span>
                    </label>
                    <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                        <input type="radio" name="payment" className="accent-green-600" />
                        <FaMoneyBillWave className="text-green-600" />
                        <span>Cash on Delivery</span>
                    </label>
                </div>
            </div>

        </>
    );
}

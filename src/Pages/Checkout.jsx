import React from "react";
import { FaCreditCard } from "react-icons/fa";
import { BsBank2 } from 'react-icons/bs';
import { PiPiggyBankFill } from 'react-icons/pi';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { FaGooglePay } from 'react-icons/fa';
import { FaApplePay } from 'react-icons/fa';
import { FaAmazonPay } from 'react-icons/fa';
import { SiRazorpay } from 'react-icons/si';
export default function Checkout() {
    return (
        <>
            <div>
                <div className='px-4 py-2'>
                    <p className='text-2xl font-bold py-4'>Add your Address</p>
                    <form>

                        <label className='block mb-2 font-medium'>
                            Full Name
                            <input type='text' className='border rounded w-full px-3 py-2' placeholder='Enter your full name' />
                        </label>

                        <label className='block mb-2 font-medium'>
                            Mobile No
                            <input type='number' className='border rounded w-full px-3 py-2' placeholder='Enter your mobile number' />
                        </label>

                        <label className='block mb-2 font-medium'>
                            House No
                            <input type='text' className='border rounded w-full px-3 py-2' placeholder='Enter your house number' />
                        </label>

                        <label className='block mb-2 font-medium'>
                            Street
                            <input type='text' className='border rounded w-full px-3 py-2' placeholder='Enter your street' />
                        </label>

                        <label className='block mb-2 font-medium'>
                            Landmark
                            <input type='text' className='border rounded w-full px-3 py-2' placeholder='Enter a landmark' />
                        </label>

                        <label className='block mb-2 font-medium'>
                            Zipcode
                            <input type='number' className='border rounded w-full px-3 py-2' placeholder='Enter your zipcode' />
                        </label>

                        <label className='block mb-2 font-medium'>
                            Town
                            <input type='text' className='border rounded w-full px-3 py-2' placeholder='Enter your town' />
                        </label>

                        <lable className="relative font-medium">
                            State
                            <select className="border rounded-sm w-full px-4 py-2 pr-8 appearance-none">
                                <option value="" disabled selected>Select your state</option>
                                <option value="California">California</option>
                                <option value="Texas">Texas</option>
                                <option value="New York">New York</option>
                                <option value="Florida">Florida</option>
                                <option value="Illinois">Illinois</option>
                            </select>
                        </lable>


                        <label className='flex justify-center items-center gap-2 mt-4 bg-green-100 border border-green-500 rounded-sm py-2'>
                            <input type='checkbox' className='bg-cyan-500' />
                            <span className='font-bold text-gray-700'>Save for Next Time</span>
                        </label>
                    </form>
                </div>
            </div>
            {/* Payment Options */}
            <div>
                <div className='px-4 py-2'>
                    <h2 className="text-2xl font-bold py-2">Payment Method</h2>
                    <div className="py-2 flex flex-col gap-2">
                        <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                            <input type="radio" name="payment" className="accent-green-600" />
                            <FaCreditCard className="text-green-600" />
                            <span>Credit / Debit Card</span>
                        </label>
                        <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                            <input type="radio" name="payment" className="accent-green-600" />
                            <BsBank2 className="text-green-600" />
                            <span>Net Banking</span>
                        </label>
                        <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                            <input type="radio" name="payment" className="accent-green-600" />
                            <div className='flex flex-row justify-start items-center gap-2 text-xl'>
                                <SiRazorpay className="text-green-600" />
                                <FaAmazonPay className="text-green-600" />
                                <FaGooglePay className="text-green-600" />
                                <FaApplePay className="text-green-600" />
                            </div>
                            <span>Pay with UPI</span>
                        </label>
                        <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                            <input type="radio" name="payment" className="accent-green-600" />
                            <PiPiggyBankFill className="text-green-600" />
                            <span>No Cost EMI</span>
                        </label>
                        <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer">
                            <input type="radio" name="payment" className="accent-green-600" />
                            <FaHandHoldingDollar className="text-green-600" />
                            <span>Cash on Delivery</span>
                        </label>
                    </div>
                </div>
            </div>


            {/* Payment Button */}
            <div className='pb-6 flex justify-center items-center'>
                <button className='text-xl font-medium bg-green-500 border-2 border-green-400 rounded-full px-16 py-2 text-white'>Procced to Pay</button>
            </div>
        </>
    );
}

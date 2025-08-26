import React from "react";

export default function Contact() {
    return (
        <>
            <div className='relative top-3 left-0 px-4 py-2 border-b-4 border-green-500'>
                <h1 className='text-4xl font-bold'>CONTACT US</h1>
            </div>

            <div className='px-4 py-6 flex flex-col gap-6'>

                {/* Contact Info */}
                <div className='border-2 border-gray-100 p-4 rounded-sm shadow-md'>
                    <h2 className='text-2xl font-semibold'>Get in Touch</h2>
                    <p className='text-gray-600 mt-1'>
                        Have questions or need help? Reach out to us anytime.
                    </p>
                    <p className='mt-3'>
                        <span className='font-semibold'>Email:</span> support@example.com
                    </p>
                    <p>
                        <span className='font-semibold'>Phone:</span> +91 9876543210
                    </p>
                </div>

                {/* Contact Form */}
                <div className='border-2 border-gray-100 p-4 rounded-sm shadow-md'>
                    <h2 className='text-2xl font-semibold'>Send Us a Message</h2>
                    <form className='flex flex-col gap-3 mt-3'>
                        <input
                            type='text'
                            placeholder='Your Name'
                            className='border p-2 rounded-sm focus:outline-none focus:border-green-500'
                        />
                        <input
                            type='email'
                            placeholder='Your Email'
                            className='border p-2 rounded-sm focus:outline-none focus:border-green-500'
                        />
                        <textarea
                            placeholder='Your Message'
                            className='border p-2 rounded-sm focus:outline-none focus:border-green-500 h-24'
                        />
                        <button
                            type='submit'
                            className='bg-green-500 text-white px-4 py-2 rounded-sm hover:bg-green-600 transition-all'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

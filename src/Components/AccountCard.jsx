import React from "react";

export default function AccountCard({ title, description, icon: Icon }) {
    return (
        <>
            <div className='border-2 border-t-gray-100 h-32 w-full relative top-10 p-4 rounded-sm shadow-md flex items-center gap-4'>
                {/* ICON */}
                {Icon && <Icon className="text-4xl text-green-500" />}

                {/* CONTENT */}
                <div className='flex flex-col justify-center'>
                    <a href='/' className='text-2xl font-semibold'>{title}</a>
                    <a href='/' className='text-gray-500 text-lg'>{description}</a>
                </div>
            </div>
        </>
    );
}

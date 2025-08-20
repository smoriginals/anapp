import React from 'react';
import ServicesCard from '../Components/ServicesCard';
export default function Services() {
    return (
        <>
            <div>
                <div className='h-full w-full bg-red-300 pt-2 px-4'>
                    <p className='text-center text-3xl font-bold'>OUR SERVICE'S</p>
                </div>
                <div className='h-full w-full bg-cyan-500 py-8'>
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                </div>
            </div>
        </>
    )
}
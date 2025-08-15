import React from 'react';
import a from '../assets/a.jpeg';
import b from '../assets/b.jpeg';
import c from '../assets/c.jpeg';
import d from '../assets/d.jpeg';
import '../index.css';

export default function Shop() {


    const plants = [
       
        { title: "PLANT C", image: c },
        { title: "PLANT D", image: d },
        { title: "PLANT A", image: a },
        { title: "PLANT B", image: b },
        { title: "PLANT C", image: c },
        { title: "PLANT D", image: d }
    ];

    return (
        <>
            <div className='min-h-[calc(100vh-8rem)] grid w-full grid-cols-2 gap-2 bg-gray-100 px-2 py-4 md:grid-cols-3'>
                {plants.map((plant, index) => (
                    <div
                        key={index}
                        className="rounded-t-xl shadow-lg hover:scale-105 transition-all duration-300 ease-in-out hover:bg-cyan-200 ">
                        <img src={plant.image} className="h-48 w-full rounded-t-lg object-cover" />
                        <p className="py-2 text-center text-xl text-black">{plant.title}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
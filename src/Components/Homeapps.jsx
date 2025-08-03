import React from 'react';
import a from '../assets/a.jpeg';
import b from '../assets/b.jpeg';
import c from '../assets/c.jpeg';
import d from '../assets/d.jpeg';
import '../index.css';

//export default function Homeapps() {
//    return (
//        <>
//            <div className='min-h-[calc(100vh-8rem)] grid w-full grid-cols-2 gap-4 md:grid-cols-3 bg-white px-4 py-6      border border-solid border-gray'>
//                <div className="rounded-lg border-dashed border border-black hover:scale-105 transition-all duration-200 ease hover:shadow-2xl">
//                    <img src={d} className="h-48 w-full object-cover rounded-t-lg" />
//                    <p className="text-center text-xl text-black py-2">PLANT D</p>
//                </div>
//            </div>
//        </>
//    );
//}


export default function Homeapps() {

    const plants = [
        { title: "PLANT A", image: a },
        { title: "PLANT A", image: a },
        { title: "PLANT B", image: b },
        { title: "PLANT C", image: c },
        { title: "PLANT D", image: d },
        { title: "PLANT A", image: a },
        { title: "PLANT B", image: b },
        { title: "PLANT C", image: c },
        { title: "PLANT D", image: d },
        { title: "PLANT A", image: a },
        { title: "PLANT A", image: a },
        { title: "PLANT B", image: b },
        { title: "PLANT C", image: c },
        { title: "PLANT D", image: d },
        { title: "PLANT A", image: a },
        { title: "PLANT B", image: b },
        { title: "PLANT C", image: c },
        { title: "PLANT D", image: d }
    ];

    return (
        <div className='min-h-[calc(100vh-8rem)] grid w-full grid-cols-2 gap-4 md:grid-cols-3 bg-white px-4 py-6 border border-solid border-gray'>
            {plants.map((plant, index) => (
                <div
                    key={index}
                    className="rounded-lg border-dashed border border-black hover:scale-105 transition-all duration-200 ease hover:shadow-2xl"
                >
                    <img src={plant.image} className="h-48 w-full object-cover rounded-t-lg" />
                    <p className="text-center text-xl text-black py-2">{plant.title}</p>
                </div>
            ))}
        </div>
    );
}



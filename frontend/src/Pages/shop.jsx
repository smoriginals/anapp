import React from 'react';
import ItemCard from '../Components/ItemCard';
import a from '../assets/a.jpeg';
import '../index.css';

export default function Shop() {

    const items = [
        { _id: "1", title: "Red Rose", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "2", title: "Lavender", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "3", title: "Sunflower", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "4", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "5", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "6", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "1", title: "Red Rose", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "2", title: "Lavender", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "3", title: "Sunflower", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "4", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "5", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "6", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "1", title: "Red Rose", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "2", title: "Lavender", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "3", title: "Sunflower", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "4", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "5", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "6", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "1", title: "Red Rose", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "2", title: "Lavender", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "3", title: "Sunflower", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "4", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "5", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a },
        { _id: "6", title: "Lotus", description: "This is a short description for the card.", price: 36000, image: a }
    ];


    return (
        <>

            <div className="bg-gray-100 px-2 py-3">
                <div className="grid grid-cols-2 gap-2 py-1 md:grid-cols-6">

                    {items.map((item) => (
                        <ItemCard
                            key={item._id}
                            id={item._id}   // 👈 important for like button later
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}

                </div>
            </div>
        </>
    );
}
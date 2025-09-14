import React from 'react';
import ItemCard from './ItemCard';
import HeroBar from '../Pages/Herobar';
import MiniHeroBar from './MiniHerobar';
import '../index.css';
import Offer from '../Pages/Offer';
import SignIn from './SignIn';
import Footer from './Footer';
import Weading from '../Pages/Weading';
import Festive from '../Pages/Festive';
import Party from '../Pages/Party';
import Birthday from '../Pages/Birthday';
import Office from '../Pages/Office';
import a from '../assets/a.jpeg';
export default function Homeapps() {


    const items = [
        { _id: "1", title: "Red Rose", description: "This is a short description for the card.",price:5000,image:a },
        { _id: "2", title: "Lavender", description: "This is a short description for the card.",price:5000,image:a },
        { _id: "3", title: "Sunflower", description: "This is a short description for the card.",price:5000,image:a },
        { _id: "4", title: "Lotus", description: "This is a short description for the card.",price:5000,image:a },
        { _id: "5", title: "Lotus", description: "This is a short description for the card.",price:5000,image:a },
        { _id: "6", title: "Lotus", description: "This is a short description for the card.",price:5000,image:a },
    ];

    return (
        <>
            <div>
                <HeroBar/>
            </div>
            <div className="bg-gray-100 px-2">
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
            <div className='bg-white pt-1'>
                <Birthday delay={3000} duration={ 0.5} />
            </div>
            
            <div className='bg-white'>
                <Offer  delay={8800} duration={0.5}/>
            </div>

            <div className='bg-white'>
                <SignIn/>
            </div>

            <div className='bg-gray-700'>
                <Footer />
            </div>
        </>
    );
}



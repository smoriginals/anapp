import React from 'react';
import ItemCard from './ItemCard';
import HeroBar from '../Pages/Herobar';
import MiniHeroBar from './MiniHerobar';
import '../index.css';
import Offer from './Offer';
import SignIn from './SignIn';
import Footer from './Footer';

export default function Homeapps() {
    return (
        <>
            <div>
                <HeroBar/>
            </div>
            <div className="bg-gray-100 px-2">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 py-2">
                   
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                    
                    
                </div>
            </div>
            <div className='bg-white pb-2'>
                <MiniHeroBar />
            </div>
            <div className='bg-white pb-2'>
                <MiniHeroBar />
            </div>
            <div className='bg-white pb-2'>
                <MiniHeroBar />
            </div>
            <div className='bg-white pb-2'>
                <MiniHeroBar />
            </div>
            <div className='bg-white pb-2'>
                <MiniHeroBar />
            </div>

            <div className='bg-white pb-2'>
                <Offer />
            </div>

            <div className='bg-white pb-2'>
                <SignIn/>
            </div>

            <div className='bg-gray-700 pb-2'>
                <Footer />
            </div>
        </>
    );
}



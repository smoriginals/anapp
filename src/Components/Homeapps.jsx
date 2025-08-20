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
export default function Homeapps() {

    return (
        <>
            <div>
                <HeroBar/>
            </div>
            <div className="bg-gray-100 px-2">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 py-1">
                   
                    <ItemCard title={'Red Rose'} desc={'This is a short description for the card.'} />
                    <ItemCard title={'Lavender'} desc={'This is a short description for the card.'} />
                    <ItemCard title={'Sunflower'} desc={'This is a short description for the card.'} />
                    <ItemCard title={'Lotus'} desc={'This is a short description for the card.'} />
                    
                    
                </div>
            </div>
            <div className='bg-white pt-1'>
                <Birthday delay={3000} duration={ 0.5} />
            </div>
            <div className='bg-white '>
                <Weading delay={6200} duration={0.5}/>
            </div>
            <div className='bg-white '>
                <Festive  delay={5700} duration={0.5}/>
            </div>
            <div className='bg-white '>
                <Party  delay={4400} duration={0.5}/>
            </div>
            <div className='bg-white '>
                <Office  delay={7500} duration={0.5}/>
            </div>

            <div className='bg-white '>
                <Offer  delay={8800} duration={0.5}/>
            </div>

            <div className='bg-white '>
                <SignIn/>
            </div>

            <div className='bg-gray-700 '>
                <Footer />
            </div>
        </>
    );
}



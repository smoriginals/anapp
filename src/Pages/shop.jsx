import React from 'react';
import a from '../assets/a.jpeg';
import b from '../assets/b.jpeg';
import c from '../assets/c.jpeg';
import d from '../assets/d.jpeg';
import ItemCard from '../Components/ItemCard';
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

            <div className="bg-gray-100 px-2 relative top-2 left-0">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-2 py-1 pb-5 overflow-y-auto">
                    {/* your ItemCards */}
                    <ItemCard title={'Top Rated'} desc={'Best reviewed by our customers'} />
                    <ItemCard title={'Most Popular'} desc={'All-time favorite plants'} />
                    <ItemCard title={'New Arrivals'} desc={'Check out the latest additions'} />
                    <ItemCard title={'Festive Specials'} desc={'Seasonal & festive collections'} />
                    <ItemCard title={'Premium Collection'} desc={'Rare & luxury plants'} />
                    <ItemCard title={'Indoor Plants'} desc={'Perfect for homes & apartments'} />
                    <ItemCard title={'Outdoor Plants'} desc={'Ideal for gardens & balconies'} />
                    <ItemCard title={'Flowering Plants'} desc={'Roses, Lotus, Hibiscus & more'} />
                    <ItemCard title={'Hanging Plants'} desc={'Beautiful trailing varieties'} />
                    <ItemCard title={'Climbers & Creepers'} desc={'For balconies & walls'} />
                    <ItemCard title={'Aquatic Plants'} desc={'Lotus, Water lily, Bamboo'} />
                    <ItemCard title={'Shade Loving Plants'} desc={'Perfect for low light spots'} />
                    <ItemCard title={'Fruit-Bearing Plants'} desc={'Grow your own fruits'} />
                    <ItemCard title={'Vegetable Plants'} desc={'Home-grown veggies'} />
                    <ItemCard title={'Aromatic Plants'} desc={'Fragrant herbs & spices'} />
                    <ItemCard title={'Fragrant Flowers'} desc={'Roses, Jasmine & more'} />
                    <ItemCard title={'Sacred & Religious Plants'} desc={'Tulsi, Peepal, Banyan'} />
                    <ItemCard title={'Seasonal Specials'} desc={'Plants for every season'} />
                    <ItemCard title={'Mini Pots Collection'} desc={'Small cute plants'} />
                    <ItemCard title={'Pet-Friendly Plants'} desc={'Safe for pets at home'} />
                    <ItemCard title={'Low Maintenance Plants'} desc={'Easy to care for'} />
                    <ItemCard title={'DIY Grow Kits'} desc={'Seeds & starter kits'} />
                    <ItemCard title={'Medicinal & Herbal'} desc={'Aloe Vera, Tulsi, Lavender'} />
                    <ItemCard title={'Office Desk Plants'} desc={'Cute plants for your workspace'} />
                    <ItemCard title={'Air Purifying Plants'} desc={'Freshen up your air naturally'} />
                    <ItemCard title={'Succulents & Cacti'} desc={'Trendy & low-maintenance'} />
                    <ItemCard title={'Bonsai & Exotic'} desc={'Unique artistic collection'} />
                    <ItemCard title={'Gift Plants'} desc={'Perfect for special occasions'} />
                </div>
            </div>

        </>
    )
}
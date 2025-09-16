import React from 'react';
//import a from '../assets/a.jpeg';
//import b from '../assets/b.jpeg';
//import c from '../assets/c.jpeg';
//import d from '../assets/d.jpeg';
import ItemCard from '../Components/ItemCard';
import a from '../assets/a.jpeg';
import '../index.css';

export default function Shop() {
    //// List of plant images to use for demonstration
    //const plants = [
    //    { title: "PLANT C", image: c },
    //    { title: "PLANT D", image: d },
    //    { title: "PLANT A", image: a },
    //    { title: "PLANT B", image: b },
    //    { title: "PLANT C", image: c },
    //    { title: "PLANT D", image: d }
    //];

    //// List of categories with optional image assignment
    //const categories = [
    //    { title: 'Top Rated', desc: 'Best reviewed by our customers', image: plants[0].image },
    //    { title: 'Most Popular', desc: 'All-time favorite plants', image: plants[1].image },
    //    { title: 'New Arrivals', desc: 'Check out the latest additions', image: plants[2].image },
    //    { title: 'Festive Specials', desc: 'Seasonal & festive collections', image: plants[3].image },
    //    { title: 'Premium Collection', desc: 'Rare & luxury plants', image: plants[4].image },
    //    { title: 'Indoor Plants', desc: 'Perfect for homes & apartments', image: plants[5].image },
    //    { title: 'Outdoor Plants', desc: 'Ideal for gardens & balconies' },
    //    { title: 'Flowering Plants', desc: 'Roses, Lotus, Hibiscus & more' },
    //    { title: 'Hanging Plants', desc: 'Beautiful trailing varieties' },
    //    { title: 'Climbers & Creepers', desc: 'For balconies & walls' },
    //    { title: 'Aquatic Plants', desc: 'Lotus, Water lily, Bamboo' },
    //    { title: 'Shade Loving Plants', desc: 'Perfect for low light spots' },
    //    { title: 'Fruit-Bearing Plants', desc: 'Grow your own fruits' },
    //    { title: 'Vegetable Plants', desc: 'Home-grown veggies' },
    //    { title: 'Aromatic Plants', desc: 'Fragrant herbs & spices' },
    //    { title: 'Fragrant Flowers', desc: 'Roses, Jasmine & more' },
    //    { title: 'Sacred & Religious Plants', desc: 'Tulsi, Peepal, Banyan' },
    //    { title: 'Seasonal Specials', desc: 'Plants for every season' },
    //    { title: 'Mini Pots Collection', desc: 'Small cute plants' },
    //    { title: 'Pet-Friendly Plants', desc: 'Safe for pets at home' },
    //    { title: 'Low Maintenance Plants', desc: 'Easy to care for' },
    //    { title: 'DIY Grow Kits', desc: 'Seeds & starter kits' },
    //    { title: 'Medicinal & Herbal', desc: 'Aloe Vera, Tulsi, Lavender' },
    //    { title: 'Office Desk Plants', desc: 'Cute plants for your workspace' },
    //    { title: 'Air Purifying Plants', desc: 'Freshen up your air naturally' },
    //    { title: 'Succulents & Cacti', desc: 'Trendy & low-maintenance' },
    //    { title: 'Bonsai & Exotic', desc: 'Unique artistic collection' },
    //    { title: 'Gift Plants', desc: 'Perfect for special occasions' }
    //];
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
            //<div className="relative left-0 top-2 bg-gray-100 px-2 py-1">
            //    <div className="grid grid-cols-2 gap-2 overflow-y-auto py-1 pb-5 md:grid-cols-5">
            //        {categories.map((cat, idx) => (
            //            <ItemCard
            //                key={cat.title + idx}
            //                title={cat.title}
            //                desc={cat.desc}
            //                image={cat.image}
            //            />
            //        ))}
            //    </div>
            //</div>
// import React from 'react';
// export default function Dashboard() {
//     return (
//         <>
//             <div className='p-2'>
//                 <div>
//                     <p className='text-2xl font-bold'>Dashboard</p>
//                     <div>
//                         <p className='font-medium text-sm'>Title of Product</p>
//                         <input type='text' placeholder='Enter Product Name' className='border-2 border-blue-400 rounded-md px-2'/>
//                         <p className='font-medium text-sm'>Description of Product</p>
//                         <input type='text' placeholder='Enter Product Description'className='border-2 border-blue-400 rounded-md px-2'/>
//                         <p className='font-medium text-sm'>Pricec of Product</p>
//                         <input type='text' placeholder='Enter Price'className='border-2 border-blue-400 rounded-md px-2'/>
//                         <p className='font-medium text-sm'>Stock of Product</p>
//                         <input type='number' placeholder='Enter Stock Amount'className='border-2 border-blue-400 rounded-md px-2'/>
//                         <p className='font-medium text-sm'>Add a Product Thumbnail</p>
//                         <input type='text'/>
//                         <p className='font-medium text-sm'>Add Products Photos</p>
//                         <input type='text'/>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React, { useState } from 'react';

export default function Dashboard() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [productPhotos, setProductPhotos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data (this can be an API call)
        console.log({
            productName,
            description,
            price,
            stock,
            thumbnail,
            productPhotos
        });
    };

    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label className="block font-medium text-sm">Title of Product</label>
                        <input
                            type="text"
                            placeholder="Enter Product Name"
                            className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-sm">Description of Product</label>
                        <input
                            type="text"
                            placeholder="Enter Product Description"
                            className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-sm">Price of Product</label>
                        <input
                            type="number"
                            placeholder="Enter Price"
                            className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-sm">Stock of Product</label>
                        <input
                            type="number"
                            placeholder="Enter Stock Amount"
                            className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-sm">Add a Product Thumbnail</label>
                        <input
                            type="text"
                            placeholder="Enter Thumbnail URL"
                            className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                            value={thumbnail}
                            onChange={(e) => setThumbnail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label className="block font-medium text-sm">Add Product Photos</label>
                        <input
                            type="text"
                            placeholder="Enter Product Photos URLs"
                            className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                            value={productPhotos}
                            onChange={(e) => setProductPhotos(e.target.value)}
                        />
                    </div>

                     <div>
                        <label className="block font-medium text-sm">Select Product Category</label>
                        <input
                            type="text"
                            placeholder="Enter Product Photos URLs"
                            className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                            value={productPhotos}
                            onChange={(e) => setProductPhotos(e.target.value)}
                        />
                       <select>
                        <option>1</option>
                        <option>2</option>
                        <option>1</option>
                        <option>1</option>
                       </select>
                    </div>

                    <div>
                        <label className="block font-medium text-sm">Add Product Tag</label>
                        <input
                            type="text"
                            placeholder="Enter Product Photos URLs"
                            className="border-2 border-blue-400 rounded-md px-3 py-2 w-full"
                            value={productPhotos}
                            onChange={(e) => setProductPhotos(e.target.value)}
                        />
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
                        >
                            Save Product
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

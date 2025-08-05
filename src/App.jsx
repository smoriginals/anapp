import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Card from './Components/Card';
import Products from './Pages/products';
import Services from './Pages/services';
import Categorys from './Pages/categorys';
import Cart from './Pages/cart';
import Orders from './Pages/orders';
import Account from './Pages/account';
import Contact from './Pages/contact';
import About from './Pages/about';
import Logout from './Pages/logout';




export default function App() {
  
  return (
      <>
          <div className='h-screen w-full overflow-hidden'>
              <Routes>
                  <Route path='/' element={<Card />} /> Redirect to Home
                  <Route path='/products' element={<Products />} />
                  <Route path='/services' element={<Services />} />
                  <Route path='/categorys' element={<Categorys />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/orders' element={<Orders />} />
                  <Route path='/account' element={<Account />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/logout' element={<Logout />} />
              </Routes>
          </div>
    </>
  )
}



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { CartProvider } from './CartContext/CartContext';
import { Cart } from './components/Cart/Cart';
import './firebase/config'
import { Checkout } from './components/Checkout/Checkout';


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/contact' element={<div>Contacto</div>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/Checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>

  );
}

export default App;

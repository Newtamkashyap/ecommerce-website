import React, { useState } from 'react';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Cart from './components/cart';
 import './App.css';
 import 'C:/dumy-ecommerce-website/src/components/styles.css';


const App = () => {
    const [cartItems, setCartItems] = useState([]);
    
    const products = [
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
    ];

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="App">
            <Navbar />
            <ProductList products={products} addToCart={addToCart} />
            <Cart cartItems={cartItems} />
        </div>
    );
};

export default App;


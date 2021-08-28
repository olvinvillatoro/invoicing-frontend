
import React from 'react'
import Main  from './Main';
import data from '../data';
import Cart from './Cart';
import { useState } from 'react';

const Shop = () => {
    const {products} = data;
    const [cartItems, set] = useState([]);
    return (
        <div className="row">
            <Main products = {products} />
            <Cart cartItems={cartItems}/>
        </div>
    )
}

export default Shop

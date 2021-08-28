import React from 'react'
import { useState } from 'react';

const Cart = (props) => {
    //vars
    const {cartItems} = props;

    //functions
    const [cartItem, setCartItem] = useState([]);

    const addItem = (product) => {
        const exist = cartItems.find(item => item.id ===product.id);
        if (exist) {

            setCartItem(cartItems.map(item => item.id==product.id? {...exist, qtty:exist.qtty+1}:item))  
        }
        else setCartItem([...cartItems,{...product,qtty:1}])
    }
    return (
        <div className="col-4">
            <h3> Cart </h3>
            
            {cartItems.leght?<div>cartItems</div>:<p>Is empty</p>}
        </div>
    )
}

export default Cart

import React from 'react'
import { useState } from 'react';

const Cart = (props) => {
    //vars
    const {cartItems, addItem,removeItem} = props;

    //functions
    const total= (qtty,price)=>{
        let totalPrice= qtty*price;
        return totalPrice;
    }


    return (
        <aside className="block col-4">
            <h3> Cart </h3>
            
            {cartItems.leght?<div>{cartItems}</div>:<p>Is empty</p>}
            {cartItems.map((item)=>(
                <div key={item.key} className="row">
                    <div className="col-2"> {item.name} </div>
                    <div className="col-2">  {item.qtty} </div>
                    <div className="col-2">
                        <button onClick={()=>addItem(item)}>Add more</button>     
                    </div>
                    <div className="col-2">
                            <button onClick={()=>removeItem(item)}>Remove item</button>     
                          </div>
                    <div className="col-2">
                        {total(item.qtty,item.price)}
                    </div>
                </div>
            ))}
        </aside>
    )
}

export default Cart

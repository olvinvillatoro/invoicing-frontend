import React from 'react'
import { useState } from 'react';
import { IoIosAddCircle } from 'react-icons/fa';


const Cart = (props) => {
    //vars
    const {cartItems, addItem,removeItem} = props;
    const ItemPrice = cartItems.reduce((acumu,currentI) => acumu + currentI.price * currentI.qtty,0);
    const taxes = ItemPrice * 0.15;
    const totalPrice = ItemPrice + taxes;
    //functions
    const total= (qtty,price)=>{
        let totalPrice= qtty*price;
        return totalPrice;
    }


    return (
        <aside className="block col-8">
            <h3> Carrito </h3>
            
            {cartItems.leght?<div>{cartItems}</div>:<p>Agregue productos</p>}
            {cartItems.map((item)=>(
                <div key={item.key} className="row justify-content-around" >
                    <div className="row"> {item.name} </div>
                    <div className="col-2"> {item.qtty} </div>
                    <div className="col-2">
                        <button className="btn btn-success" onClick={()=>addItem(item)}>+</button>     
                    </div>
                    <div className="col-2">
                            <button className="btn btn-danger" onClick={()=>removeItem(item)}>-</button>     
                          </div>
                    <div className="col-2">
                        {total(item.qtty,item.price)}
                    </div>
                </div>
            ))}
            <div className="card text-white bg-info mb-3" style={{maxWidth: "40rem;"}}>
                <div className="card-header">Total</div>
                    <div className="card-body">
                        <h6>Subtotal</h6>
                        <p className="card-text">L{ItemPrice}</p>
                        <h6>Impuestos</h6>
                        <p className="card-text">L{taxes.toFixed(2)}</p>
                        <h6>Total</h6>
                        <p className="card-text">L{totalPrice.toFixed(2)}</p>
                    </div>
            </div>
        </aside>
    )
}

export default Cart

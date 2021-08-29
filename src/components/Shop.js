
import React from 'react'
import Main  from './Main';
import data from '../data';
import Cart from './Cart';
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../services/api'
import { all, constant } from 'async';

const Shop = () => {
   // const [products,setProducts] = useState([]);
    const [cartItems, setCartItem] = useState([]);
    const [product, setProducts] = useState([]);
    const {products} = data
    const fetchProductos= async ()=>{
        console.log(axios.getUri)
        const response = await axios.get("/products");
        console.log("fetchProducts-------------->",response)
        return response;
    }
    
    useEffect( () => {
        const getAllProducts = async() =>{

            const allProducts = await fetchProductos();
            console.log("allProducts---------->",allProducts)
            if(allProducts) setProducts(allProducts)
        }

        getAllProducts();
    }, [])
    const addItem = (product) => {
       fetchProductos();
        console.log("shop clicked on addItem")
        const exist = cartItems.find(item => item.id ===product.id);
        if (exist) {

            setCartItem(cartItems.map(item => item.id===product.id? {...exist, qtty:exist.qtty+1}:item))  
            console.log(cartItems)

        }
        else setCartItem([...cartItems,{...product,qtty:1}])
    }
    const removeItem = (product) =>{
        const exist = cartItems.find(item => item.id ===product.id);
        if (exist) {

            setCartItem(cartItems.filter(item => item.id!== product.id ))  
        }
        else  setCartItem(cartItems.map(item => item.id===product.id? {...exist, qtty:exist.qtty-1}:item))  
        console.log(cartItems)
    }
    return (
        <div className="container">
            <div className="row">

            <Main addItem={addItem} products = {products} />
            </div>
            <Cart addItem = {addItem} removeItem = {removeItem} cartItems={cartItems} className="col-8"/>
        </div>
    )
}

export default Shop


import React from 'react'
import Main  from './Main';
import data from '../data';
import Cart from './Cart';
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../services/api'
import { all, constant } from 'async';
import ReactPaginate from 'react-paginate';
const Shop = () => {
   // use state 
    const [cartItems, setCartItem] = useState([]);
    const [products, setProducts] = useState([]);

    

    const fetchProductos= async ()=>{
        console.log(axios.getUri)
        const response = await axios.get("/products/products");
        console.log("fetchProducts-------------->",response)
        return response;
    }
    
    useEffect( () => {
        const getAllProducts = async() =>{

            const allProducts = await fetchProductos();
            console.log("allProducts---------->",allProducts)
            if(allProducts) setProducts(allProducts.data)
        }

        getAllProducts();
    }, [])
    const addItem = (products) => {
       fetchProductos();
        console.log("shop clicked on addItem")
        const exist = cartItems.find(item => item.id ===products.id);
        if (exist) {

            setCartItem(cartItems.map(item => item.id===products.id? {...exist, qtty:exist.qtty+1}:item))  
            console.log(cartItems)

        }
        else setCartItem([...cartItems,{...products,qtty:1}])
    }
    const removeItem = (products) =>{
        const exist = cartItems.find(item => item.id ===products.id);
        if (exist) {

            setCartItem(cartItems.filter(item => item.id!== products.id ))  
        }
        else  setCartItem(cartItems.map(item => item.id===products.id? {...exist, qtty:exist.qtty-1}:item))  
        console.log(cartItems)
    }


        

    return (
        <div className="container">
            <div className="row">
                <div className="col-8" >
                        <Main addItem={addItem} products = {products} />
                </div>
                <div className="col-4" >
                    <Cart addItem = {addItem} removeItem = {removeItem} cartItems={cartItems}/>
                </div>
            </div>
        </div>
    )
}

export default Shop

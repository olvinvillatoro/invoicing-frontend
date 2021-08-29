import React from 'react'
import Cart from './Cart'
import Product from './Product';
import { useState, useEffect } from 'react';
import Products from './Products'

const Main = (props) => {
    const [pageNumber,setPageNumber] = useState(0);
    const productPerPage=10;
    const pagesVisited = pageNumber*productPerPage
    const {products,addItem} = props;


    const displayProducts = products.slice(pagesVisited, pagesVisited+productPerPage).map((product =>{
        console.log("product--------->",product)
        return(
            <div className="grid">
           
              <Product addItem={addItem} key={product.id} product={product}/>
              
            
            
            
        </div>
        );
    }
        
        ));
    return (
        <main className="col">
          {displayProducts}
        </main>

    )
}

export default Main

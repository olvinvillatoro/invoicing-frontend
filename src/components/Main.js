import React from 'react'
import Cart from './Cart'
import Product from './Product';
import Products from './Products'

const Main = (props) => {
    const {products} = props;
    console.log("----------------->",props)
    return (
        <main>
            <div className="col-8">
                {products.map((product) => (
                  <Product key={product.id} product={product}/>
                  
                ))}
                
                
            </div>
        </main>

    )
}

export default Main

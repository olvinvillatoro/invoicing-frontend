import React from 'react'
import Cart from './Cart'
import Product from './Product';
import Products from './Products'

const Main = (props) => {
    const {products,addItem} = props;
    return (
        <main className="col-8">
            <div >
                {products.map((product) => (
                  <Product addItem={addItem} key={product.id} product={product}/>
                  
                ))}
                
                
            </div>
        </main>

    )
}

export default Main

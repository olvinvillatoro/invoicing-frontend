import React from 'react'
import Cart from './Cart'
import Product from './Product';
import { useState, useEffect } from 'react';
import Products from './Products'
import ReactPaginate from 'react-paginate';

const Main = (props) => {
    const [pageNumber,setPageNumber] = useState(0);
    const [searchProduct, setSearchProduct] = useState('');
    const productPerPage=3;
    const pagesVisited = pageNumber*productPerPage
    const {products,addItem} = props;
    const [showProducts, setShowProducts] = useState(products);
    const filterSearch = (event)=>{

        console.log("oringinal valie########",showProducts)
        setSearchProduct(event.target.value)
    }
    useEffect(() => {
        console.log(products,"<<<<<<<<<<>>>>>>>",showProducts)
        setShowProducts(products)
      }, [])
  
    useEffect(() => {
        console.log(showProducts,"useefecte==>>>>>>",products)
        products.filter( (prod=>{
            if(searchProduct!="" ){
                if( prod.name.toLowerCase().includes(searchProduct.toLocaleLowerCase()) ){
                    setShowProducts([...showProducts, prod]);
                    console.log("filter search=========",showProducts)
                }
            }
    
        })
        ); 
    }, [searchProduct])

    const pageCount = Math.ceil(showProducts.length/ productPerPage);
    const displayProducts = showProducts.slice(pagesVisited, pagesVisited+productPerPage).map((product =>{
        console.log("product--------->",product)
        return(
            <div className="row">
              <Product addItem={addItem} key={product.id} product={product}/>
            </div>
            );}
        
        
        ));
    const pageChange = ({selected})=>{
            setPageNumber(selected)
    }
    return (
        <main className="col">
            <input type="text" placeholder="Buscar..." onChange={filterSearch}/>

          {displayProducts}
          <ReactPaginate 
          previousLabel={"Anterior"}
          nextLabel={"Siguiente"}
          pageCount={pageCount}
          onPageChange={pageChange}
          containerClassName={"paginationButtons"}
          activeClassName={"activePage"}
            />
        </main>

    )
}

export default Main

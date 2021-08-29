import React from 'react'
import Cart from './Cart'
import Product from './Product';
import { useState, useEffect } from 'react';
import Products from './Products'
import ReactPaginate from 'react-paginate';

const Main = (props) => {
    const [pageNumber,setPageNumber] = useState(0);
    const productPerPage=3;
    const pagesVisited = pageNumber*productPerPage
    const {products,addItem} = props;

    const pageCount = Math.ceil(products.length/ productPerPage);
    const displayProducts = products.slice(pagesVisited, pagesVisited+productPerPage).map((product =>{
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

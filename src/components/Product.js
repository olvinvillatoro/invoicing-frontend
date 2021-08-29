import React from 'react'

const Product = (props) => {
    const {product, addItem} = props;
    const clickearBoton = ()=>{
        console.log("click en botton",addItem);
    }
    return (
        <div className="">
            <div className="">
                <div className="card" style={{width : '10px;'}}>
                    <img src={product.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.descr}</p>
                            <button onClick={()=>addItem(product)} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Product

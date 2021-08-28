import React from 'react'

const Product = (props) => {
    const {product} = props;
    return (
        <div className="col-8">
            <div className="Row">
                <div class="card" style={{width : '10px;'}}>
                    <img src={product.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">{product.name}</h5>
                            <p class="card-text">{product.descr}</p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Product

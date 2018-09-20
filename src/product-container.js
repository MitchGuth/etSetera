import React from 'react';

let ProductContainer = (props) =>{
    return <li className="product-container">
            <h1>{props.product.title}</h1>
            <p>{props.product.description}</p>
            <p>{props.product.price}</p>
            <img className="product-img" src={props.product.imageURL}/>
        </li>
}

export default ProductContainer;
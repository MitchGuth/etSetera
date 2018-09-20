import React from 'react';
import { connect } from 'react-redux';
import ProductContainer from './product-container.js';

let FilteredProductList = (props) =>{
    // console.log(props.product);
    return <ul className="product-list">
            {props.products.map(product =>
                <ProductContainer product = {product}/>)}
        </ul>
}

let connectedFilteredProductList = connect(state=> state)(FilteredProductList);

export default connectedFilteredProductList;
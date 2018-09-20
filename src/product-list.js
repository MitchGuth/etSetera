import React from 'react';
import { connect } from 'react-redux';
import ProductContainer from './product-container.js';

let ProductList = (props) =>{
    return <ul className="product-list">
            {props.initialProducts.map(product =>
                <ProductContainer product = {product}/>)}
        </ul>
}

let connectedProductList = connect(state=> state)(ProductList);

export default connectedProductList;
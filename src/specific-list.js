import React from 'react';
import { connect } from 'react-redux';
import FilteredProductList from './filtered-product-list';
import NavList from './router.js';
import SideBar from './side-bar.js';

let SpecificProductList = (props) =>{
        return <div>
                <ul className="product-list">
                        <FilteredProductList products ={props.initialProducts.filter(product =>
                        (props.match.url === `/catagories/${product.categoryId}`))} />
                </ul>
        </div>
}

let connectedSpecificProductList = connect(state=> state)(SpecificProductList);

export default connectedSpecificProductList;
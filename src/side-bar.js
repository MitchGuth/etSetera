import React, {Component} from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

let SideBar = (props) =>{
    return <ul className="side-bar">
        <li><NavLink to="/all">All Products</NavLink></li>
        {props.initialCatagories.map(catagory =>
            <li><NavLink to={`/catagories/${catagory.id}`}>{catagory.title}</NavLink></li>)}
        </ul>
}

let connectedSideBar = connect(state=> state)(SideBar);

export default connectedSideBar;
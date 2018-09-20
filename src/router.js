import React, {Component} from 'react';
import { HashRouter, Route, NavLink, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import ProductList from './product-list.js';
import SideBar from './side-bar.js';
import SpecificProductList from './specific-list';

let NavBar = () =>{
    return  <div className="header">
                <NavLink to="/home">EtSetera</NavLink>
            </div>
};

let Home = () =>
    <div>
        <h1>Welcome to Et Setera where all your cat needs are taken care of!</h1>
    </div>

let AllProducts = () => 
    <div>
        <ProductList />
    </div>

let Router = () =>{
    return <HashRouter>
            <div>
                    <NavBar/>
                    <SideBar/>
                        <Switch>
                            <Route path="/home" component={Home}/>
                            <Route path="/all" component={AllProducts}/>
                            <Route path="/catagories/:id" component={SpecificProductList}/>
                            <Route path="/" component={Home}/>
                        </Switch>
            </div>
            </HashRouter>           
}

let connectedRouter = connect(state=> state)(Router);

export default connectedRouter;
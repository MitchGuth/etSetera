import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './router.js';
import {createStore} from 'redux';
import registerServiceWorker from './registerServiceWorker';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';

let initialState = {
    initialCatagories: [
        {"id":"1","title":"Hats","slug":"hats"},
        {"id":"2","title":"Pants","slug":"pants"},
        {"id":"3","title":"Tops","slug":"tops"}
    ],
    initialProducts: [
        {"id":"1","title":"Kitten Cap","description":"This kitten cap will keep your mittens warm!","price":120,"imageURL":"https://images.unsplash.com/photo-1500174857981-b769ffdc53ce","categoryId":"1"},
        {"id":"2","title":"Purrsian Slipper","description":"Even Sherlock Holmes needed a purr or two.","price":50,"imageURL":"https://images.unsplash.com/photo-1467839024528-ac3042ac0ae7","categoryId":"1"},
        {"id":"3","title":"Huggable Me","description":"Wear your cat in style, rain or shine.","price":30,"imageURL":"https://images.unsplash.com/photo-1503386435953-66943ba30817","categoryId":"3"},
        {"id":"4","title":"Our Clawmark Jeans","description":"Fool, no man can kill me. But a cat might.","price":300,"imageURL":"https://images.unsplash.com/photo-1512218168353-4bba6ac5f543","categoryId":"2"}
    ]
}

let reducer = (oldState, action) =>{
    return {
        ...oldState
    }
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
);

let app = 
    <Provider store = {store}>
        <Router />
    </Provider>

// let AppSmart = connect(state=> state)(App)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
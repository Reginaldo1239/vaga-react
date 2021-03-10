import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Private from './Private';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import ThankPurchase from '../pages/ThankPurchase';
import ProducDetail from '../pages/ProductDetail';
import Store from '../pages/Store';
import Profile from '../pages/Profile';
import {ContextCartProvider} from '../Context/Cart';
import {ContextStoreProvider} from '../Context/Store';
export default function(props){
    let {contextsProvider} = props;
    return(
        <Router>
            <ContextStoreProvider>
            <ContextCartProvider>
            <Switch>
                <Route exact={true} path='/login' component={Login}></Route>
                <Route exact={true} path='/' component={Store}></ Route>
                <Private exact={true} path='/checkout' component={Checkout}></Private>
                <Private exact={true} path='/thank_purchase' component={ThankPurchase}></Private>
                <Route exact={true} path='/product/:product_id' component={ProducDetail}></Route>
                <Route exact={true} path='/cart' component={Cart}></Route>
                <Private exact={true} path='/profile' component={Profile}></Private>
            </Switch>
            </ContextCartProvider>
            </ContextStoreProvider>       
        </Router>
    )
}
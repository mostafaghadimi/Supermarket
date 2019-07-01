import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './assets/css/normalizer.css'
import './assets/css/app.css'

// import Login from './components/login/login'
// import Addition from './components/supermarket/add/add-supermarket'
// import Registration from './components/registration/registration'
// import MarketList from "./components/supermarket/list/MarketList";
// import PageHeader from "./components/pageHeader/PageHeader";
// import ProductAddition from "./components/supermarket/add_product/add-product";
// import ProductList from "./components/supermarket/list/ProductList";
// import RoleAddition from "./components/supermarket/add_role/add-role";
// import RoleList from "./components/supermarket/list/RoleList";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                {/* <PageHeader/> */}
                <Switch>
                    {/* <Route exact path='/supermarket/add' component={Addition} />
                    <Route exact path='/supermarket/list' component={MarketList} />
                     */}
                </Switch>
            </BrowserRouter>
        )
    }
}

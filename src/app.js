import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './assets/css/normalizer.css'
import './assets/css/app.css'

import Navigation from './components/navigation/navigation'
import Index from './components/index/index'
import Shop from './components/shop/shop'
import ShopSubmit from './components/shop/shop-submit'
import Cart from './components/cart/cart'
import AppInstall from './components/app/install'

import * as serviceWorker from './serviceWorker';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                     <Route exact path='/' render={() => (
                         <div>
                            <Navigation/>
                            <Index/>
                         </div>
                     )} />
                     <Route exact path='/shop' render={() => (
                         <div>
                            <Navigation/>
                            <Shop/>
                         </div>
                     )} />
                     <Route exact path='/shop-submit' render={() => (
                         <div>
                             <Navigation/>
                             <ShopSubmit/>
                         </div>
                     )}/>

                     <Route exact path="/cart" render={() => (
                         <div>
                            <Navigation/>
                            <Cart/>
                         </div>
                     )} />

                     <Route exact path="/download" render={() => (
                         <div>
                             <Navigation/>
                             <AppInstall/>
                         </div>

                     )}/>
                
                </Switch>
            </BrowserRouter>
        )
    }
}

serviceWorker.register()
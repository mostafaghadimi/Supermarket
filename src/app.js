import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './assets/css/normalizer.css'
import './assets/css/app.css'

import Login from './components/login/login'
import Addition from './components/supermarket/add/add-supermarket'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/supermarket/add' component={Addition} />
                    <Route exact path='/' component={Login} />
                </Switch>
            </BrowserRouter>
        )
    }
}

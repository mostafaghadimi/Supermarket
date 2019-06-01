import React, { Component } from 'react'

import './assets/css/normalizer.css'
import './assets/css/app.css'

import Login from './components/login/login'
import Addition from './components/supermarket/add/add-supermarket'

export default class App extends Component {
    render() {
        return (
            <Addition/>
        )
    }
}

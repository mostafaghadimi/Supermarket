import React, { Component } from 'react'

import './../../assets/css/login.css'
export default class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="login-form">
                    <img className="login-form-image" src={require('../../assets/img/login.jpg')} />
                </div>
                <div className="login-info">
                    <div className="login-input">
                        <input type="text" placeholder="نام کاربری"/>
                    </div>
                    <div className="login-input">
                        <input type="password" placeholder="رمز عبور" />
                    </div>
                </div>
                <div className="login-button-container">
                    <button className="login-button">ورود</button>
                </div>
            </div>
        )
    }
}

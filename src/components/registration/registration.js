import React, { Component } from 'react'

import '../../assets/css/registration.css'

export default class Registration extends Component {
    render() {
        return (
            <div className="registration-container">
                <div className="registration-form">
                    <img className="registration-form-image" src={require('../../assets/img/registration.png')} />
                </div>
                <div className="registration-info">
                    <div className="registration-input">
                        <input type="text" placeholder="نام کاربری"/>
                    </div>
                    <div className="registration-input">
                        <input type="email" placeholder="ایمیل"/>
                    </div>
                    <div className="registration-input">
                        <input type="password" placeholder="رمز عبور" />
                    </div>
                </div>
                <div className="registration-button-container">
                    <button className="registration-button">ورود</button>
                </div>
            </div>
        )
    }
}

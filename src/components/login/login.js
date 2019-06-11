import React, {Component} from 'react'

import './../../assets/css/login.css'
import { Redirect } from 'react-router-dom'

const pageData = {
    username: "",
    password: "",
};

export default class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <div className="login-form">
                    <img className="login-form-image" src={require('../../assets/img/login.jpg')}/>
                </div>
                <div className="login-info">
                    <div className="login-input">
                        <input type="text" placeholder="نام کاربری" onChange={this.handleUsernameChange}/>
                    </div>
                    <div className="login-input">
                        <input type="password" placeholder="رمز عبور" onChange={this.handlePasswordChange}/>
                    </div>
                </div>
                <div className="login-button-container">
                    <button className="login-button" onClick={this.onSubmitClicked}>ورود</button>
                </div>
            </div>
        )
    }

    onSubmitClicked(event) {
        event.preventDefault();
        fetch('http://localhost:8000/user/login/username/', {
            method: 'POST',
            body: JSON.stringify({
                user_name: pageData.username,
                password: pageData.password,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        }).then(response => {
            alert(response.statusText);
            if (response.status === 302){
                window.location.replace("../supermarket/add")
            }
        }).catch(console.log)
    }

    handlePasswordChange = (e) => {
        pageData.password = e.target.value;
    };

    handleUsernameChange = (e) => {
        pageData.username = e.target.value;
    };
}

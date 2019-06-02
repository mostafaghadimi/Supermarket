import React, {Component} from 'react'

import './../../assets/css/login.css'

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
        let formData = new FormData();
        formData.append('user_name', pageData.username);
        formData.append('password', pageData.password);
        fetch('http://localhost:8000/user/login/username/', {
            method: 'POST',
            body: formData,
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            alert(response.statusText);
            return response.json()
        }).then(json => {
            console.log(json);
            alert(json)
        })

    }

    handlePasswordChange = (e) => {
        pageData.password = e.target.value;
    };

    handleUsernameChange = (e) => {
        pageData.username = e.target.value;
    };
}

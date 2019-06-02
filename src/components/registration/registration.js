import React, { Component } from 'react'

import '../../assets/css/registration.css'

const pageData = {
    username: "",
    password: "",
    email: "",
};


export default class Registration extends Component {
    render() {
        return (
            <div className="registration-container">
                <div className="registration-form">
                    <img className="registration-form-image" src={require('../../assets/img/registration.png')} />
                </div>
                <div className="registration-info">
                    <div className="registration-input">
                        <input type="text" placeholder="نام کاربری" onChange={this.handleUsernameChange}/>
                    </div>
                    <div className="registration-input">
                        <input type="email" placeholder="ایمیل" onChange={this.handleEmailChange}/>
                    </div>
                    <div className="registration-input">
                        <input type="password" placeholder="رمز عبور" onChange={this.handlePasswordChange}/>
                    </div>
                </div>
                <div className="registration-button-container">
                    <button className="registration-button" onClick={this.onSubmitClicked}>ورود</button>
                </div>
            </div>
        )
    }

    onSubmitClicked(event) {
        event.preventDefault();
        fetch('http://localhost:8000/user/signup/', {
            method: 'POST',
            body: JSON.stringify({
                user_name: pageData.username,
                password: pageData.password,
                email: pageData.email,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        }).then(response => {
            // alert(response.status);
            if (response.status === 201){
                window.location.replace("../supermarket/add")
            }
            else {
                alert("نام کاربری شما تکراری است.")
            }
        }).catch(console.log)
    }

    handlePasswordChange = (e) => {
        pageData.password = e.target.value;
    };

    handleUsernameChange = (e) => {
        pageData.username = e.target.value;
    };

    handleEmailChange = (e) => {
        pageData.email = e.target.value;
    };
}

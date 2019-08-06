import React, { Component } from 'react'

import '../../../assets/css/addition.css'
import Constant from "../../../Constant";


const pageData = {
    name: "",
    role: "",
};

export default class RoleAddition extends Component {
    render() {
        return (
            <div className="addition-container">
                <div className="addition-form">
                    <img className="addition-form-image" src={require('../../../assets/img/addition.jpg')} />
                </div>
                <div className="addition-info">
                    <div className="addition-input">
                        <input type="text" placeholder="نام و نام خانوادگی پرسنل" onChange={this.handleNameChange}/>
                    </div>
                    <div className="addition-input">
                        <input type="text" placeholder="نقش در فروشگاه" onChange={this.handleRoleChange}/>
                    </div>
                    <div className="addition-input">
                        <input type="file" />
                    </div>
                </div>
                <div className="addition-button-container">
                    <button className="addition-button" onClick={this.onSubmitClicked}>ثبت نقش</button>
                </div>
            </div>
        )
    }

    onSubmitClicked(event) {
        event.preventDefault();
        fetch('http://192.168.194.100:8000/market/role_add/', {
            method: 'POST',
            body: JSON.stringify({
                name: pageData.name,
                role: pageData.role,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        }).then(response => {
            alert(response.statusText);
            if (response.status === 302){

            }
            return response.json()
        }).catch(console.log)
    }

    handleNameChange = (e) => {
        pageData.name = e.target.value;
    };

    handleRoleChange = (e) => {
        pageData.role = e.target.value;
    };
}

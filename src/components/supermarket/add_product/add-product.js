import React, { Component } from 'react'

import '../../../assets/css/addition.css'
import Constant from "../../../Constant";


const pageData = {
    name: "",
    amount: "",
    price: "",
};

export default class ProductAddition extends Component {
    render() {
        return (
            <div className="addition-container">
                <div className="addition-form">
                    <img className="addition-form-image" src={require('../../../assets/img/addition.jpg')} />
                </div>
                <div className="addition-info">
                    <div className="addition-input">
                        <input type="text" placeholder="نام محصول" onChange={this.handleNameChange}/>
                    </div>
                    <div className="addition-input">
                        <input type="text" placeholder="قیمت محصول" onChange={this.handlePriceChange}/>
                    </div>
                    <div className="addition-input">
                        <input type="tel" placeholder="تعداد محصول" onChange={this.handleAmountChange}/>
                    </div>
                    <div className="addition-input">
                        <input type="file" />
                    </div>
                </div>
                <div className="addition-button-container">
                    <button className="addition-button" onClick={this.onSubmitClicked}>ثبت محصول</button>
                </div>
            </div>
        )
    }

    onSubmitClicked(event) {
        event.preventDefault();
        fetch('http://localhost:8000/market/product_add/', {
            method: 'POST',
            body: JSON.stringify({
                name: pageData.name,
                amount: pageData.amount,
                price: pageData.price,
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

    handlePriceChange = (e) => {
        pageData.price = e.target.value;
    };
    handleAmountChange = (e) => {
        pageData.amount = e.target.value;
    };
}

import React, {Component} from 'react'

import '../../../assets/css/addition.css'


const pageData = {
    name: "",
    address: "",
    phone: "",
    owner: "",
};

export default class Addition extends Component {
    render() {
        return (
            <div className="addition-container">
                <div className="addition-form">
                    <img className="addition-form-image" src={require('../../../assets/img/addition.jpg')} />
                </div>
                <div className="addition-info">
                    <div className="addition-input">
                        <input type="text" placeholder="نام فروشگاه" onChange={this.handleNameChange}/>
                    </div>
                    <div className="addition-input">
                        <input type="text" placeholder="آدرس فروشگاه" onChange={this.handleAddressChange}/>
                    </div>
                    <div className="addition-input">
                        <input type="tel" placeholder="شماره تماس فروشگاه" onChange={this.handlePhoneChange}/>
                    </div>
                    <div className="addition-input">
                        <input type="tel" placeholder="نام صاحب فروشگاه" onChange={this.handleOwnerChange}/>
                    </div>
                    <div className="addition-input">
                        <input type="file" />
                    </div>
                </div>
                <div className="addition-button-container">
                    <button className="addition-button" onClick={this.onSubmitClicked}>ثبت فروشگاه</button>
                </div>
            </div>
        )
    }

    onSubmitClicked(event) {
        event.preventDefault();
        fetch('http://192.168.1.10:8000/market/full_add/', {
            method: 'POST',
            body: JSON.stringify({
                name: pageData.name,
                address: pageData.address,
                phone_number: pageData.phone,
                owner: pageData.owner,
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

    handleAddressChange = (e) => {
        pageData.address = e.target.value;
    };
    handlePhoneChange = (e) => {
        pageData.phone = e.target.value;
    };
    handleOwnerChange = (e) => {
        pageData.owner = e.target.value;
    };
}

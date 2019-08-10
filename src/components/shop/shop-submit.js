import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import '../../assets/css/shop-submit.css'
import Constant from "../../Constant";
import Navigation from "../navigation/navigation";

const pageData = {
    name: "",
    address: "",
    phone: "",
    owner: "",
    desc: "",
};


export default class ShopSubmit extends Component {
    render() {
        return (
            <div className="shop-submit"> 
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Input fluid label='نام فروشگاه' placeholder='نام فروشگاه' onChange={this.handleNameChange}/>
                    <Form.Input fluid label='شماره تماس' placeholder='شماره تماس' onChange={this.handlePhoneChange}/>
                    <Form.Input fluid label='آدرس' placeholder='آدرس'  onChange={this.handleAddressChange}/>
                    </Form.Group>
                    
                    <Form.TextArea label='توضیحات' placeholder='توضیحات ...' onChange={this.handleDescChange}/>
                    <Form.Checkbox label='قوانین مربوط به ثبت فروشگاه را مطالعه کرده‌ام.'/>
                    <Form.Button onClick={this.onSubmitClicked}>ثبت</Form.Button>
                </Form>
            </div>

        )
    }

    onSubmitClicked(event) {
        event.preventDefault();
        console.log(pageData);
        const item = localStorage.getItem("USER_INFO");
        let api = "";
        let owner = "";
        if (item !== null){
            let parse = JSON.parse(item);
            api = parse.api;
            owner = parse.id;
        }
        console.log("api = " + api);
        console.log("item = " + item);
        console.log("owner = " + owner);
        fetch('http://192.168.194.100:8000/market/add/', {
            method: 'POST',
            body: JSON.stringify({
                market_name: pageData.name,
                address: pageData.address,
                phone_number: pageData.phone,
                description: pageData.desc,
                owner: owner,
                api: api,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        }).then(response => {
            console.log(response);
            if (response.status === 201){
                window.open('/', '_self');
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

    handleDescChange = (e) => {
        pageData.desc = e.target.value;
    };
}

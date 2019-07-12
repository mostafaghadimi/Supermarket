import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import '../../assets/css/shop-submit.css'

const pageData = {
    name: "",
    address: "",
    phone: "",
    owner: "",
};


export default class ShopSubmit extends Component {
    render() {
        return (
            <div className="shop-submit"> 
                <Form>
                    <Form.Group widths='equal'>
                    <Form.Input fluid label='نام فروشگاه' placeholder='نام فروشگاه' />
                    <Form.Input fluid label='شماره تماس' placeholder='شماره تماس' />
                    <Form.Input fluid label='آدرس' placeholder='آدرس' />
                    </Form.Group>
                    
                    <Form.TextArea label='توضیحات' placeholder='توضیحات ...'/>
                    <Form.Checkbox label='قوانین مربوط به ثبت فروشگاه را مطالعه کرده‌ام.' />
                    <Form.Button>ثبت</Form.Button>
                </Form>
            </div>

        )
    }

    onSubmitClicked(event) {
        event.preventDefault();
        fetch('http://localhost:8000/market/full_add/', {
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

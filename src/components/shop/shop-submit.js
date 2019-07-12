import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

import '../../assets/css/shop-submit.css'

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
                    
                    <Form.TextArea label='توضیحات' placeholder='توضیحات ...' />
                    <Form.Checkbox label='قوانین مربوط به ثبت فروشگاه را مطالعه کرده‌ام.' />
                    <Form.Button>ثبت</Form.Button>
                </Form>
            </div>

        )
    }
}

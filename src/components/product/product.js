import React, { Component } from 'react'
import {Icon, Button} from 'semantic-ui-react';

import Comment from '../comment/comment'
import AddComment from '../comment/addcomment'

import '../../assets/css/product.css'

export default class Product extends Component {
    render() {
        return (
            <div className="product-container">
                <div className="product-info">
                    <div className="product-detail">
                        <div>
                            <table>
                                <tr>
                                    <td>
                                        <Icon name="shopping bag"/>
                                    </td>
                                    <td>نام</td>
                                    <td>پودر لباس‌شویی تاژ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Icon name="money bill alternate outline"/>
                                    </td>
                                    <td>قیمت</td>
                                    <td>30000</td>
                                </tr>
                                    
                            </table>
                    
                            <Button primary>
                                اضافه کردن به سبد خرید
                            </Button>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src={require('../../assets/img/taj.jpg')} />
                    </div>
                </div>
                <Comment/>
                <AddComment/>

            </div>
        )
    }
}

import React, { Component } from 'react'
import {Icon, Button} from 'semantic-ui-react';

import Comments from '../comment/comment'
import AddComment from '../comment/addcomment'

import '../../assets/css/product.css'

export default class Product extends Component {

    state = {
        model: {
            comments: [],
        },
    };
    componentDidMount() {
        const productId = JSON.parse(localStorage.getItem("product"));

        fetch('http://192.168.194.100:8000/model/detail/', {
            method: 'POST',
            body: JSON.stringify({
                id: productId,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({model: data});
                console.log(data);
            })
            .catch(console.log);
    }
    addToCart = () => {
        const cart = "cart";
        let parse = JSON.parse(localStorage.getItem(cart));
        if (parse === null) {
            let str = JSON.stringify({
                items: [{
                    name: this.props.title,
                    price: this.props.price,
                    amount: 1
                },]
            });
            localStorage.setItem(cart, str)
        } else {
            const items = [];
            let hasItem = false;
            parse.items.map(({name, price, amount}) => {
                if (name === this.props.title) {
                    items.push({
                        name: name,
                        price: price,
                        amount: amount + 1
                    });
                    hasItem = true;
                } else {
                    items.push({
                        name: name,
                        price: price,
                        amount: amount
                    })
                }
            });
            if (!hasItem) {
                items.push({
                    name: this.props.title,
                    price: this.props.price,
                    amount: 1
                })
            }
            let str = JSON.stringify({
                items: items
            });
            localStorage.setItem(cart, str)
        }
    };

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
                                    <td>{this.state.model.product_name}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Icon name="money bill alternate outline"/>
                                    </td>
                                    <td>قیمت</td>
                                    <td>{this.state.model.price}</td>
                                </tr>
                                    
                            </table>
                    
                            <Button primary onClick={this.addToCart}>
                                اضافه کردن به سبد خرید
                            </Button>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src={"http://192.168.194.100:8000" + this.state.model.image} />
                    </div>
                </div>
                {
                    this.state.model.comments.map(({id, user_name, date, comment}) => {
                        return (
                            <Comments author={user_name} date={date.substr(0, 10)} text={comment}/>
                        )
                    })
                }
                <AddComment isShop={false}/>

            </div>
        )
    }
}

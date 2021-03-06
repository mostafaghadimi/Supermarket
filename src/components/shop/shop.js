import React, {Component} from 'react'
import {Button, Icon, Rating} from 'semantic-ui-react'

import Comments from '../comment/comment'
import AddComment from '../comment/addcomment'
import '../../assets/css/shopinfo.css'
import {Link} from "react-router-dom";

export default class ShopPage extends Component {
    static defaultProps = {};

    state = {
        market: {
            comments_count: 3,
            rates_result: 3,
            comments: [],
        },
        models: [],
    };

    handleRate = (e, {rating}) => {
        const item = JSON.parse(localStorage.getItem("USER_INFO"));
        const marketId = JSON.parse(localStorage.getItem("market_id"));

        fetch('http://192.168.194.100:8000/market/rate/', {
            method: 'POST',
            body: JSON.stringify({
                id: marketId,
                owner: item.id,
                rate: rating,
                api: item.api,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        })
            .then(res => {
                if (res.status === 503) {
                    alert("شما قبلا به این فروشگاه نظر داده اید!")
                }
                return res.json()
            }).then((data) => {
            console.log(data);
        })
            .catch(console.log);
    };

    componentDidMount() {
        const marketId = JSON.parse(localStorage.getItem("market_id"));

        fetch('http://192.168.194.100:8000/market/detail/', {
            method: 'POST',
            body: JSON.stringify({
                id: marketId,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({market: data});
                console.log("data = " + data);
            })
            .catch(console.log);

        fetch('http://192.168.194.100:8000/model/menu/search/name/', {
            method: 'POST',
            body: JSON.stringify({
                market: marketId,
                product_name: "",
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        })
            .then(res => res.json())
            .then((data) => {
                console.log("data.models");
                console.log(data.models);
                this.setState({models: data.models});
                console.log(this.state.models)
            })
            .catch(console.log);
    }


    render() {
        return (
            <React.Fragment>
                <div className="shop-page-container">
                    <div className="shop-info">
                        <div className="shop-info-contact">
                            <div className="shop-name">
                                {this.state.market.market_name}
                            </div>

                            <ShopInfo info={this.state.market.phone_number} icon="phone" color="green"/>
                            <ShopInfo info={this.state.market.address} icon="map marker alternate" color="red"/>
                            <ShopInfo info={this.state.market.comments_count + " نظر"} icon="comment" color="yellow"/>
                        </div>
                        <div className="shop-image">
                            <img src={"http://192.168.194.100:8000" + this.state.market.image}/>
                        </div>
                    </div>
                    <div className="shop-products">
                        {
                            this.state.models.map(({id, product_name, price, image}) => {
                                return (
                                    <ShopProduct id={id} image={"http://192.168.194.100:8000" + image} title={product_name}
                                                 price={price}/>
                                )
                            })
                        }
                    </div>
                    <div>
                        <Rating defaultRating={this.state.market.rates_result} maxRating={5} onRate={this.handleRate}/>
                        {
                            this.state.market.comments.map(({id, user_name, date, comment}) => {
                                return (
                                    <Comments author={user_name} date={date.substr(0, 10)} text={comment}/>
                                )
                            })
                        }
                        <AddComment isShop={true}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


class ShopInfo extends Component {
    render() {
        return (
            <div className="shop-info-contact-detail">
                <div>
                    <Icon name={this.props.icon} color={this.props.color}/>
                </div>
                <div>
                    {this.props.info}
                </div>
            </div>
        )
    }
}


class ShopProduct extends Component {
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
    productClick = () => {
        localStorage.setItem("product", this.props.id);
        window.open('/product', '_self')
    };

    render() {
        return (
            <div className="shop-item">
                <div className="shop-image">
                    <img src={this.props.image}/>
                </div>

                <div className="shop-title" onClick={this.productClick}>
                    <div>
              <span className="shop-icon">
                <Icon name="shopping bag" color="blue"/>
              </span>
                        {this.props.title}
                    </div>

                </div>

                <div className="product-price">
            <span className="shop-icon">
              <Icon name="money bill alternate outline" color="green"/>
            </span>
                    {this.props.price}
                </div>
                <Button className="product-to-cart" onClick={this.addToCart}>
                    <Icon name="add square" color="orange"/>
                    <span className="add-to-cart">
                 افزودن به سبد خرید
              </span>
                </Button>
            </div>
        )
    }
}
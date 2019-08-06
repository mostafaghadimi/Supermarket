import React, {Component} from 'react'
import {Rating, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import '../../assets/css/index.css'

export default class Index extends Component {
    state = {
        markets: [
        ],
    };
    static defaultProps = {
        isSearch: "false",
    };

    componentDidMount() {
        let marketName = "";
        if (this.props.isSearch){
            let item = localStorage.getItem("pattern");
            if (item !== null){
                marketName = item
            }
        }else {
            localStorage.removeItem("pattern")
        }
        fetch('http://192.168.194.100:8000/market/menu/search/', {
            method: 'POST',
            body: JSON.stringify({
                market_name: marketName,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data.markets);
                this.setState({markets: data.markets});
                console.log(this.state.markets)
            })
            .catch(console.log);
    }

    render() {
        return (
            <div className="index">
                <div className="index-container">
                    {this.state.markets.map(market => {
                        const {id, market_name, address, rates_result, image} = market;
                        return (
                            <IndexItem title={market_name} address={address} image={image}
                                       rating={rates_result} link="/shop" id={id}/>
                        )
                    })}
                </div>

            </div>
        )
    }
}

class IndexItem extends Component {
    changeRoutePath = (event) => {
        localStorage.setItem("market_id", this.props.id)
    };
    render() {
        return (
            <div className="index-item">
                <Link to={this.props.link}
                      onClick={this.changeRoutePath}>
                    <div className="index-image">
                        <img src={"http://192.168.194.100:8000" + this.props.image}/>
                    </div>
                </Link>

                <div className="index-title">
                    <div>
              <span className="index-icon">
                <Icon name="shopping basket" color="blue"/>
              </span>
                        <Link to={this.props.link}
                              onClick={this.changeRoutePath}>
                            {this.props.title}
                        </Link>
                    </div>
                    <div className="index-rating">
                        <Rating defaultRating={this.props.rating} maxRating={5} disabled/>
                    </div>
                </div>

                <div className="index-address">
            <span className="index-icon">
              <Icon name="map marker alternate" color="red"/>
            </span>
                    {this.props.address}
                </div>
            </div>
        )
    }
}
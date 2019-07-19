import React, { Component } from 'react'
import {Rating, Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import '../../assets/css/index.css'

export default class Index extends Component {
    state = {
        markets: [],
    };

    componentDidMount() {
        fetch('http://127.0.0.1:8000/market/list')
            .then(res => res.json())
            .then((data) => {
                this.setState({markets: data});
                console.log(this.state.markets)
            })
            .catch(console.log);
    }

    render() {
      return (
        <div className="index">
          <div className="index-container">
              <React.Fragment>
                  {
                      this.state.markets.map(market => {
                          const {name, address, phone_number, owner} = market;
                          return (
                              <IndexItem title={name} address={address} image={require('../../assets/img/ok.jpg')} rating={4} link="/shop"/>
                          );
                      })
                  }
              </React.Fragment>
          </div>
  
        </div>
      )
    }
  }

  class IndexItem extends Component {
    render() {
      return (
        <div className="index-item">
          <Link to={this.props.link}>
            <div className="index-image">
                <img src={this.props.image}/>
            </div>
          </Link>
  
          <div className="index-title">
            <div>
              <span className="index-icon">
                <Icon name="shopping basket" color="blue"/>
              </span>
              <Link to={this.props.link}>
                {this.props.title}
              </Link>
            </div>
            <div className="index-rating">
              <Rating defaultRating={this.props.rating} maxRating={5} disabled />
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
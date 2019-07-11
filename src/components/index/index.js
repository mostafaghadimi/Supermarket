import React, { Component } from 'react'

import {Rating, Icon} from 'semantic-ui-react'

import '../../assets/css/index.css'

export default class Index extends Component {
    render() {
      return (
        <div className="index">
          <div className="index-container">
            <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/>
            <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/>
            <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/>
            <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/>
            <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/>
          </div>
  
        </div>
      )
    }
  }
  
  class IndexItem extends Component {
    render() {
      return (
        <div className="index-item">
          <div className="index-image">
            <img src={this.props.image}/>
          </div>
  
          <div className="index-title">
            <div>
              <span className="index-icon">
                <Icon name="shopping basket" color="blue"/>
              </span>
              {this.props.title}
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
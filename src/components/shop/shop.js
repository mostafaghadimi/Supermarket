import React, { Component } from 'react'
import {Icon} from 'semantic-ui-react'

import Comments from '../comment/comment'
import AddComment from '../comment/addcomment'
import '../../assets/css/shopinfo.css'

export default class ShopPage extends Component {
    render() {
      return (
        <div className="shop-page-container">
          <div className="shop-info">
            <div className="shop-info-contact">
              <div className="shop-name">
                فروشگاه سعید
              </div>
              
              <ShopInfo info="021-77401767" icon="phone" color="green"/>
              <ShopInfo info="خ پیروزی، خ پرستار، پارک پرستار" icon="map marker alternate" color="red"/>
              <ShopInfo info="0 نظر" icon="comment" color="yellow"/>
            </div>
            <div className="shop-image">
              <img src={require('../../assets/img/ok.jpg')}/>
            </div>
          </div>
          <div className="shop-products">
            <ShopProduct image={require('../../assets/img/taj.jpg')}  title="شوینده‌ی لباس تاژ" price="20 هزار تومان"/>
            <ShopProduct image={require('../../assets/img/taj.jpg')}  title="شوینده‌ی لباس تاژ" price="20 هزار تومان"/>
            <ShopProduct image={require('../../assets/img/taj.jpg')}  title="شوینده‌ی لباس تاژ" price="20 هزار تومان"/>
            <ShopProduct image={require('../../assets/img/taj.jpg')}  title="شوینده‌ی لباس تاژ" price="20 هزار تومان"/>
            <ShopProduct image={require('../../assets/img/taj.jpg')}  title="شوینده‌ی لباس تاژ" price="20 هزار تومان"/>
            <ShopProduct image={require('../../assets/img/taj.jpg')}  title="شوینده‌ی لباس تاژ" price="20 هزار تومان"/>
          </div>
          <div>
            <Comments author="مصطفی قدیمی"  date="1 روز پیش" text="خیلی سوپری خوبیه."/>
            <AddComment/>
          </div>
        </div>
      )
    }
  }
  
  
  class ShopInfo extends Component {
    render(){
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
    render(){
      return (
        <div className="shop-item">
          <div className="shop-image">
            <img src={this.props.image}/>
          </div>
  
          <div className="shop-title">
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
        </div>
      )
    }
  }
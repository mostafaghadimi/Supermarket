import React, { Component } from 'react'
import { Button, Input, Menu, Modal, Icon, Radio } from 'semantic-ui-react'
import {Grid, Card, Image, Rating} from 'semantic-ui-react'

import '../../assets/css/navigation.css'
import '../../assets/css/index.css'
import '../../assets/css/shopinfo.css'

export default class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu size='small' className="navigation">
          <Menu.Item name='خانه' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='لیست فروشگاه‌ها'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu position='left'>
            <Menu.Item>
              <Modal trigger={<Button color="green">ثبت‌‌نام</Button>} className="modal">
                  <Modal.Header className="modal-header">ثبت‌نام</Modal.Header>
                  <Modal.Content>
                  <Modal.Description>
                      <Input iconPosition='right' placeholder='ایمیل' type="email">
                          <Icon name='at' />
                          <input />
                      </Input>
                      <br/>
                      <br/>
                      <Input iconPosition='right' placeholder='نام کاربری'>
                          <Icon name='user' />
                          <input />
                      </Input>
                      <br/>
                      <br/>
                      <Input iconPosition='right' placeholder='رمز عبور' type="password">
                          <Icon name='key' />
                          <input />
                      </Input>
                      <br/>
                      <br/>
                      <Button color="green">
                          ثبت‌نام
                      </Button>
                  </Modal.Description>
                  </Modal.Content>
              </Modal>
            </Menu.Item>

            <Menu.Item>
              <Modal trigger={<Button primary>ورود</Button>}>
                  <Modal.Header className='modal-header'>ورود</Modal.Header>
                  <Modal.Content>
                  <Modal.Description>
                      <Input iconPosition='right' placeholder='نام کاربری'>
                          <Icon name='user' />
                          <input />
                      </Input>
                      <br/>
                      <br/>
                      <Input iconPosition='right' placeholder='رمز عبور' type="password">
                          <Icon name='key' />
                          <input />
                      </Input>
                      <br/>
                      <br/>
                      <div className="remember">
                        <Radio toggle />  
                        <span>
                          مرا به خاطر بسپار
                        </span>
                      </div>

                      <br/>
                      <br/>
                      <Button primary>
                          ورود
                      </Button>
                  </Modal.Description>
                  </Modal.Content>
              </Modal>
            </Menu.Item>
            
          </Menu.Menu>
          <Menu.Item>
            <Input icon='search' placeholder='جست‌و‌جو'/>
          </Menu.Item>
        </Menu>
        <ShopPage/>
      </div>
    )
  }
}


class Index extends Component {
  render() {
    return (
      <div className="index">
        <div className="index-container">
          {/* <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/>
          <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/>
          <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/>
          <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/>
          <IndexItem title="فروشگاه سعید" address="تهران، خ پیروزی، خ پرستار، پارک پرستار" image={require('../../assets/img/ok.jpg')} rating={4}/> */}
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

class ShopPage extends Component {
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
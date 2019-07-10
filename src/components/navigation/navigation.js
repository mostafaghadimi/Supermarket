import React, { Component } from 'react'
import { Button, Input, Menu, Modal, Icon, Radio } from 'semantic-ui-react'
import {Grid, Card, Image, Rating} from 'semantic-ui-react'

import '../../assets/css/navigation.css'
import '../../assets/css/index.css'
export default class MenuExampleSizeSmall extends Component {
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
        <Index/>
      </div>
    )
  }
}



// export default class Index extends Component {
class Index extends Component {
  render() {
    return (
      <div className="index">
        <div className="index-container">
          <IndexItem/>
          <IndexItem/>
          <IndexItem/>
          <IndexItem/>
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
              <img src={require('../../assets/img/ok.jpg')}/>
            </div>

            <div className="index-title">
              <div>
                <span className="index-icon">
                  <Icon name="shopping basket"/>
                </span>
                فروشگاه سعید
              </div>
              <div className="index-rating">
                <Rating defaultRating={4} maxRating={5} disabled />
              </div>
            </div>
            <div className="index-address">
              <span className="index-icon">
                <Icon name="map marker alternate"/>
              </span>
                خ پیروزی، خ پرستار، پارک پرستار
            </div>

          </div>
          
    )
  }
}

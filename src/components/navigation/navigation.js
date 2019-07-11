import React, { Component } from 'react'
import { Button, Input, Menu, Modal, Icon, Radio } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import '../../assets/css/navigation.css'

export default class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu size='small' className="navigation">
          <Link to='/'>
            <Menu.Item name='خانه' active={activeItem === 'home'} onClick={this.handleItemClick} />
          </Link>
          <Link to='/shops'>
            <Menu.Item
              name='لیست فروشگاه‌ها'
              active={activeItem === 'messages'}
              onClick={this.handleItemClick}
            />
          </Link>

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
      </div>
    )
  }
}

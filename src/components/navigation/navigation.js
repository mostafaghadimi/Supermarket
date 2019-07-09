import React, { Component } from 'react'
import { Button, Input, Menu, Modal, Icon } from 'semantic-ui-react'

import '../../assets/css/navigation.css'
export default class MenuExampleSizeSmall extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
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
            <Modal trigger={<Button color="primary">ورود</Button>}>
                <Modal.Header className='modal-header'>ورود</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <Input iconPosition='right' placeholder='نام کاربری'>
                        <Icon name='user' />
                        <input />
                    </Input>
                    <br/>
                    <br/>
                    <Input iconPosition='right' placeholder='رمز عبور'>
                        <Icon name='key' />
                        <input />
                    </Input>
                    <br/>
                    <br/>
                    <Button color="primary">
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
    )
  }
}
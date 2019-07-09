import React, { Component } from 'react'
import { Button, Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSizeSmall extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='small'>
        <Menu.Item name='خانه' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='لیست فروشگاه‌ها'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='left'>
          <Menu.Item>
            <Button color="green">ثبت نام</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>ورود</Button>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Item>
          <Input icon='search' placeholder='جست‌و‌جو'/>
        </Menu.Item>
      </Menu>
    )
  }
}
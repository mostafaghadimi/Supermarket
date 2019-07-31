import React, { Component } from 'react'
import { Icon, Button, Menu, Table, Input } from 'semantic-ui-react'

import '../../assets/css/cart.css'

export default class cart extends Component {
    render() {
        return (
            <div className="cart">
                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>نام کالا</Table.HeaderCell>
                        <Table.HeaderCell>تعداد</Table.HeaderCell>
                        <Table.HeaderCell>فی</Table.HeaderCell>
                        <Table.HeaderCell> قیمت (تومان)</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>مایع لباس‌شویی سافتلن</Table.Cell>
                        <Table.Cell>1</Table.Cell>                        
                        <Table.Cell>24000</Table.Cell>                        
                        <Table.Cell>24000</Table.Cell>                        
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>مایع لباس‌شویی تاژ</Table.Cell>
                        <Table.Cell>2</Table.Cell>                        
                        <Table.Cell>24000</Table.Cell>
                        <Table.Cell>48000</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>

                <Menu>
                    <Menu.Item>
                        <Input placeholder="کد تخفیف را وارد کنید" className="offcode"/>
                    </Menu.Item>
                    <Menu.Item>
                        <Button>اعمال کد تخفیف</Button>
                        
                    </Menu.Item>
                </Menu>

                <Button color='orange'>
                    پرداخت
                </Button>
            </div>
        )
    }
}

import React, {Component} from 'react'
import {Icon, Button, Menu, Table, Input} from 'semantic-ui-react'

import '../../assets/css/cart.css'

function getTotalPrice() {
    let parse = JSON.parse(localStorage.getItem("cart"));
    let total = 0;
    if (parse !== null && parse.items !== null) {
        parse.items.map(({name, price, amount}) => {
            total += amount * price;
        });
    }
    return total;
}

function getDiscount() {
    return 0;
}

function getRealPrice() {
    return getTotalPrice() - getDiscount()
}

function pay() {
    localStorage.removeItem("cart");
    alert("خرید با موفقیت انجام شد.");

}

function getCart() {
    let parse = JSON.parse(localStorage.getItem("cart"));
    console.log(parse !== null);
    if (parse !== null) {
        console.log("not null");
        return (
            <Table.Body>
                {
                    parse.items.map(({name, price, amount}) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{name}</Table.Cell>
                                <Table.Cell>{amount}</Table.Cell>
                                <Table.Cell>{price}</Table.Cell>
                                <Table.Cell>{amount * price}</Table.Cell>
                            </Table.Row>
                        )
                    })
                }
            </Table.Body>
        )

    }
}

export default class Cart extends Component {
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
                    {getCart()}
                </Table>

                <Menu>
                    <Menu.Item>
                        <Input placeholder="کد تخفیف را وارد کنید" className="offcode"/>
                    </Menu.Item>
                    <Menu.Item>
                        <Button>اعمال کد تخفیف</Button>

                    </Menu.Item>
                </Menu>

                <Menu>
                    <Menu.Item>
                        <span>
                            جمع مبالغ:
                        </span>
                        <span>
                            {getTotalPrice()}
                        </span>
                    </Menu.Item>
                    <Menu.Item>
                        <span>
                            تخفیف:
                        </span>
                        <span>
                            {getDiscount()}
                        </span>
                    </Menu.Item>
                    <Menu.Item>
                        <span>
                            قابل پرداخت:
                        </span>
                        <span>
                            {getRealPrice()}
                        </span>
                    </Menu.Item>
                    <Menu.Item>
                        <Button color='orange' onClick={pay}>
                            پرداخت
                        </Button>

                    </Menu.Item>
                </Menu>


            </div>
        )
    }
}

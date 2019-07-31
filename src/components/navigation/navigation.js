import React, {Component} from 'react'
import {Button, Input, Menu, Modal, Icon, Label, Radio} from 'semantic-ui-react'
import {Link} from 'react-router-dom'

import '../../assets/css/navigation.css'

const pageData = {
    name: "",
    email: "",
    password: "",
};

export default class Navigation extends Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <div>
                <Menu size='small' className="navigation">
                    <Link to='/'>
                        <Menu.Item name='خانه' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                    </Link>
                    <Link to='/shop-submit'>
                        <Menu.Item
                            name='ثبت فروشگاه'
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
                                        <Input iconPosition='right' placeholder='ایمیل' type="email" onChange={this.handleEmailChange}>
                                            <Icon name='at'/>
                                            <input/>
                                        </Input>
                                        <br/>
                                        <br/>
                                        <Input iconPosition='right' placeholder='نام کاربری' onChange={this.handleNameChange}>
                                            <Icon name='user'/>
                                            <input/>
                                        </Input>
                                        <br/>
                                        <br/>
                                        <Input iconPosition='right' placeholder='رمز عبور' type="password" onChange={this.handlePasswordChange}>
                                            <Icon name='key'/>
                                            <input/>
                                        </Input>
                                        <br/>
                                        <br/>
                                        <Button color="green" onClick={this.signUp}>
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
                                            <Icon name='user'/>
                                            <input/>
                                        </Input>
                                        <br/>
                                        <br/>
                                        <Input iconPosition='right' placeholder='رمز عبور' type="password">
                                            <Icon name='key'/>
                                            <input/>
                                        </Input>
                                        <br/>
                                        <br/>
                                        <div className="remember">
                                            <Radio toggle/>
                                            <span>
                          مرا به خاطر بسپار
                        </span>
                                        </div>

                                        <br/>
                                        <br/>
                                        <Button primary  onClick={this.login}>
                                            ورود
                                        </Button>
                                    </Modal.Description>
                                </Modal.Content>
                            </Modal>
                        </Menu.Item>

                    </Menu.Menu>
                    <Menu.Item>
                        <Link to="/cart">
                            <Label as="a">
                                <Icon name="shopping bag" /> سبد خرید 
                            </Label>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Input icon='search' placeholder='جست‌و‌جو'/>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }

    handleNameChange = (e) => {
        pageData.name = e.target.value;
    };

    handleEmailChange = (e) => {
        pageData.email = e.target.value;
    };

    handlePasswordChange = (e) => {
        pageData.password = e.target.value;
    };

    signUp(event) {
        event.preventDefault();
        fetch('http://localhost:8000/user/signup/', {
            method: 'POST',
            body: JSON.stringify({
                user_name: pageData.name,
                email: pageData.email,
                password: pageData.password,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        }).then(response => {
            if (response.status === 201) {
                alert("ثبت نام با موفقیت انجام شد!!!");
                this.props.history.push('')
            } else {
                alert(response.statusText  + "شما قبلا در این سایت ثبت نام کرده اید!!!");
            }
            return response.json()
        }).catch(console.log);
    }

    login(event) {
        event.preventDefault();
        fetch('http://localhost:8000/user/login/username/', {
            method: 'POST',
            body: JSON.stringify({
                user_name: pageData.name,
                password: pageData.password,
            }),
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json; charset=UTF-8"
            },
            credentials: 'same-origin'
        }).then(response => {

            alert(response.statusText + response.status);
            if (response.status === 201) {
                alert("ثبت نام با موفقیت انجام شد!!!");
                this.props.history.push('')
            } else {
                alert("شما قبلا در این سایت ثبت نام کرده اید!!!");
            }
            return response.json()
        }).catch(console.log);
    }
}

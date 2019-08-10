import React, {Component} from 'react'
import {Button, Input, Menu, Modal, Icon, Label, Radio} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


import '../../assets/css/navigation.css'

const pageData = {
    name: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    pattern: "",
    validation: "",
    productName: "",
    category: "",
    price: 0,
    amount: 0,
    desc: "",
    location: false,
};
const USER_INFO = "USER_INFO";
const state = {activeItem: 'home'};
let isShop = false;


const toggle = () => {
    pageData.location = !pageData.location
};

export default class Navigation extends Component {

    static defaultProps = {
        isShop: "false",
    };

    render() {
        const {activeItem} = state;
        isShop = this.props.isShop;
        return (
            <div>
                <Menu size='small' className="navigation">
                    <Link to='/'>
                        <Menu.Item name='خانه' active={activeItem === 'home'} onClick={handleItemClick}/>
                    </Link>
                    {hasMenu()}
                    <Menu.Item>
                        <Input icon='search' placeholder='جست‌و‌جو' onKeyDown={handleKeyDown}
                               onChange={handlePatternChange}/>
                    </Menu.Item>
                    <Radio toggle label='برحسب مکان' onChange={toggle} style={{marginTop: "15px"}}/>
                    <Link to='/download'>
                        <Menu.Item>
                            <Button primary>
                                نصب اپلیکیشن
                            </Button>
                        </Menu.Item>
                    </Link>
                </Menu>
            </div>
        )
    }
}

const handleNameChange = (e) => {
    pageData.name = e.target.value;
};

const handlePasswordChange = (e) => {
    pageData.password = e.target.value;
};
const handleFirstNameChange = (e) => {
    pageData.firstName = e.target.value;
};
const handleLastNameChange = (e) => {
    pageData.lastName = e.target.value;
};
const handlePhoneNumChange = (e) => {
    pageData.phone = e.target.value;
};
const handleEmailChange = (e) => {
    pageData.email = e.target.value;
};

const signUp = (event) => {
    event.preventDefault();
    fetch('http://192.168.194.100:8000/user/signup/username/', {
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
        console.log(response);
        if (response.status === 201) {
            alert("ثبت نام با موفقیت انجام شد!!!");
            window.open('/', '_self')
        } else {
            alert(response.statusText + "شما قبلا در این سایت ثبت نام کرده اید!!!");
        }
        return response.json()
    }).then((data) => {
            console.log(data);
            localStorage.setItem(USER_INFO, JSON.stringify(data));
        }
    ).catch(console.log);
};

const login = (event) => {
    event.preventDefault();
    fetch('http://192.168.194.100:8000/user/login/username/', {
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
        if (response.status === 201) {
            alert("ورود با موفقیت انجام شد!!!");
            window.open('/', '_self')
        } else {
            alert("شما در این سایت ثبت نام نکرده اید!!!");
        }
        return response.json()
    }).then((data) => {
        console.log(data);
        console.log(JSON.stringify(data));
        localStorage.setItem(USER_INFO, JSON.stringify(data));
        console.log(localStorage.getItem(USER_INFO));

    }).catch(console.log);
};

const getNewData = () => {
    const item = JSON.parse(localStorage.getItem(USER_INFO));

    fetch('http://192.168.194.100:8000/user/show/profile/', {
        method: 'POST',
        body: JSON.stringify({
            user_name: item.user_name,
            api: item.api,
        }),
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json; charset=UTF-8"
        },
        credentials: 'same-origin'
    }).then(response => {
        return response.json()
    }).then((data) => {
            localStorage.setItem(USER_INFO, JSON.stringify(data));
        }
    ).catch(console.log);
};

const handleItemClick = (e, {name}) => state.activeItem = name;

const submit = (event) => {
    event.preventDefault();
    const marketId = JSON.parse(localStorage.getItem("market_id"));

    const item = JSON.parse(localStorage.getItem(USER_INFO));
    fetch('http://192.168.194.100:8000/model/add/', {
        method: 'POST',
        body: JSON.stringify({
            market: marketId,
            product_name: pageData.productName,
            count: pageData.amount,
            price: pageData.price,
            category: pageData.category,
            description: pageData.desc,
            api: item.api,
            owner: item.id,
        }),
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json; charset=UTF-8"
        },
        credentials: 'same-origin'
    }).then(response => {
        if (response.status === 201) {
            alert("محصول با موفقیت اضافه شد.")
        } else {
        }
        return response.json()
    }).catch(console.log);
};

const handlePriceChange = (e) => {
    pageData.price = e.target.value;
};

const handleProductNameChange = (e) => {
    pageData.productName = e.target.value;
};

const handleDescChange = (e) => {
    pageData.desc = e.target.value;
};

const handleAmountChange = (e) => {
    pageData.amount = e.target.value;
};

const handleCategoryChange = (e) => {
    pageData.category = e.target.value;
};

function addProduct() {
    if (isShop) {
        return (
            <Menu.Item>
                <Modal trigger={<Button color="green">اضافه کردن محصول</Button>} className="modal">
                    <Modal.Header className="modal-header">اضافه کردن محصول</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Input iconPosition='right' placeholder='نام محصول'
                                   onChange={handleProductNameChange}>
                                <Icon name='product hunt'/>
                                <input/>
                            </Input>
                            <br/>
                            <br/>
                            <Input iconPosition='right' placeholder='قیمت'
                                   onChange={handlePriceChange}>
                                <Icon name='money'/>
                                <input/>
                            </Input>
                            <br/>
                            <br/>
                            <Input iconPosition='right' placeholder='تعداد'
                                   onChange={handleAmountChange}>
                                <Icon name='sort amount down'/>
                                <input/>
                            </Input>
                            <br/>
                            <br/>
                            <Input iconPosition='right' placeholder='توضیحات'
                                   onChange={handleDescChange}>
                                <Icon name='sort amount down'/>
                                <input/>
                            </Input>
                            <br/>
                            <br/>
                            <Input iconPosition='right' placeholder='دسته بندی'
                                   onChange={handleCategoryChange}>
                                <Icon name='sort amount down'/>
                                <input/>
                            </Input>
                            <br/>
                            <br/>
                            <Button color="green" onClick={submit}>
                                ثبت کردن
                            </Button>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </Menu.Item>
        )
    }
}


const handleValidationChange = (e) => {
    pageData.validation = e.target.value;
};
let isValidate = false;

const validate = (e) => {
    e.preventDefault();
    const item = JSON.parse(localStorage.getItem(USER_INFO));

    fetch('http://192.168.194.100:8000/user/validate/check/phone/', {
        method: 'POST',
        body: JSON.stringify({
            user_name: item.user_name,
            api: item.api,
            phone_random: pageData.validation,
            phone_validation: item.phone_validation,
        }),
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json; charset=UTF-8"
        },
        credentials: 'same-origin'
    }).then(response => {
        if (response.status === 201) {
            isValidate = true;
        }
        return response.json()
    }).then((data) => {
            if (data.phone_validation === 'true') {
                window.open('/', '_self');
            }
        }
    ).catch(console.log);
};

const showValidation = () => {
    const item = JSON.parse(localStorage.getItem(USER_INFO));
    if (item != null) {
        if (item.phone_validation === false) {
            return (
                <Menu.Item>
                    <Modal trigger={<Button color="green">تایید حساب</Button>} className="modal">
                        <Modal.Header className="modal-header">تایید حساب کاربری</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Input iconPosition='right' placeholder="کد ارسالی را وارد کنید"
                                       onChange={handleValidationChange}>
                                    <Icon name='user'/>
                                    <input/>
                                </Input>
                                <br/>
                                <br/>
                                <Button color="green" onClick={validate}>
                                    ثبت اطلاعات
                                </Button>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </Menu.Item>
            )
        }
    }
};

const hasMenu = () => {
    const item = localStorage.getItem(USER_INFO);
    if (item == null) {
        console.log("if");
        return (
            <Menu.Menu position='left'>
                <Menu.Item>
                    <Modal trigger={<Button color="green">ثبت‌‌نام</Button>} className="modal">
                        <Modal.Header className="modal-header">ثبت‌نام</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Input iconPosition='right' placeholder='نام کاربری'
                                       onChange={handleNameChange}>
                                    <Icon name='user'/>
                                    <input/>
                                </Input>
                                <br/>
                                <br/>
                                <Input iconPosition='right' placeholder='رمز عبور' type="password"
                                       onChange={handlePasswordChange}>
                                    <Icon name='key'/>
                                    <input/>
                                </Input>
                                <br/>
                                <br/>
                                <Button color="green" onClick={signUp}>
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
                                <Input iconPosition='right' placeholder='نام کاربری'
                                       onChange={handleNameChange}>
                                    <Icon name='user'/>
                                    <input/>
                                </Input>
                                <br/>
                                <br/>
                                <Input iconPosition='right' placeholder='رمز عبور' type="password"
                                       onChange={handlePasswordChange}>
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
                                <Button primary onClick={login}>
                                    ورود
                                </Button>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/cart">
                        <Label as="a">
                            <Icon name="shopping bag"/> سبد خرید
                        </Label>
                    </Link>
                </Menu.Item>
            </Menu.Menu>
        )
    } else {
        console.log("else");
        getNewData();
        const item = JSON.parse(localStorage.getItem(USER_INFO));
        console.log(item);
        return (
            <Menu.Menu>
                <Link to='/shop-submit'>
                    <Menu.Item
                        name='ثبت فروشگاه'
                        active={state.activeItem === 'messages'}
                        onClick={handleItemClick}
                    />
                </Link>
                <Menu.Item>
                    <Modal trigger={<Button color="green">پروفایل</Button>} className="modal">
                        <Modal.Header className="modal-header">اطلاعات پروفایل کاربر</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Input iconPosition='right' placeholder={'نام: ' + item.first_name}
                                       onChange={handleFirstNameChange}>
                                    <Icon name='user'/>
                                    <input/>
                                </Input>
                                <br/>
                                <br/>
                                <Input iconPosition='right' placeholder={'نام خانوادگی: ' + item.last_name}
                                       onChange={handleLastNameChange}>
                                    <Icon name='info circle'/>
                                    <input/>
                                </Input>
                                <br/>
                                <br/>
                                <Input iconPosition='right' placeholder={'ایمیل: ' + item.email}
                                       onChange={handleEmailChange}>
                                    <Icon name='mail'/>
                                    <input/>
                                </Input>
                                <br/>
                                <br/>
                                <Input iconPosition='right' placeholder={'شماره تلفن: ' + item.phone_number}
                                       onChange={handlePhoneNumChange}>
                                    <Icon name='phone'/>
                                    <input/>
                                </Input>
                                <br/>
                                <br/>
                                <Button color="green" onClick={updateProfile}>
                                    ثبت اطلاعات
                                </Button>
                            </Modal.Description>
                        </Modal.Content>
                    </Modal>
                </Menu.Item>
                <Menu.Item>
                    <Button primary onClick={removeUser}>
                        خروج
                    </Button>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/cart">
                        <Label as="a">
                            <Icon name="shopping bag"/> سبد خرید
                        </Label>
                    </Link>
                </Menu.Item>
                {showValidation()}
                {addProduct()}
            </Menu.Menu>
        )
    }
};

const removeUser = () => {
    localStorage.clear();
    window.open('/', '_self');
};

const updateProfile = (event) => {
    event.preventDefault();
    const item = JSON.parse(localStorage.getItem(USER_INFO));

    let firstName = pageData.firstName;
    let lastName = pageData.lastName;
    let email = pageData.email;
    let phoneNumber = pageData.phone;
    if (pageData.firstName === "") {
        firstName = item.first_name
    }
    if (pageData.lastName === "") {
        lastName = item.last_name
    }
    if (pageData.email === "") {
        email = item.email
    }
    if (pageData.phone === "") {
        phoneNumber = item.phone_number
    }
    fetch('http://192.168.194.100:8000/user/change/profile/', {
        method: 'POST',
        body: JSON.stringify({
            user_name: item.user_name,
            api: item.api,
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
        }),
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json; charset=UTF-8"
        },
        credentials: 'same-origin'
    }).then(response => {
        return response.json()
    }).then((data) => {
            localStorage.setItem(USER_INFO, JSON.stringify(data));
            window.open('/', '_self');
        }
    ).catch(console.log);
};

const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        localStorage.setItem("pattern", pageData.pattern);
        localStorage.setItem("location", pageData.location);
        window.open('/search/' + pageData.pattern, '_self');
    }
};

const handlePatternChange = (e) => {
    pageData.pattern = e.target.value;
};

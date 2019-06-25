import React, {Component} from 'react';
import "./PageHeader.css"
import {Image, Input, Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";

const colorsB = ['blue', 'violet', 'purple', 'pink', 'brown'];

export default class PageHeader extends Component {

    static defaultProps = {
        menuOptions: [
            {id: 1, name: "Home", color: "blue", url: "/"},
            {id: 2, name: "Add Market", color: "violet", url: "/supermarket/add"},
            {id: 3, name: "Add Product", color: "purple", url: "/product/add"},
            {id: 4, name: "Add Role", color: "pink", url: "/role/add"},
            {id: 5, name: "Show Roles", color: "pink", url: "/role/list"},
            {id: 6, name: "Show Markets", color: "brown", url: "/supermarket/list"},
            {id: 7, name: "Show Products", color: "red", url: "/product/list"},
            {id: 8, name: "Sign Up", color: "orange", url: "/user/registration"},
            {id: 9, name: "Login", color: "orange", url: "/"},
        ]
    };

    state = {active: colorsB[0]};

    // handleItemClick = (e, {id, name}) => this.setState({active: name});
    handleItemClick = (e, {id, name}) => {
        if (id === 5){

        }
        this.setState({active: name})
    };

    render() {
        return (
            <div style={{direction: "rtl", marginBottom: "10px"}}>
                <div className="pageHeader">
                    <img className="pageLogo" src={require('../../assets/img/market.png')} alt="page"/>
                </div>
                <Menu inverted style={{marginTop: "0"}}>
                    {this.props.menuOptions.map(({name, color, url}, index) => (
                        <Link to={url}>
                            <Menu.Item
                                key={index}
                                name={name}
                                active={this.state.active === name}
                                color={color}
                                onClick={this.handleItemClick}>
                            </Menu.Item>
                        </Link>
                    ))}
                    <Menu.Menu>
                        <Menu.Item style={{minWidth: "400px"}}>
                            <Input icon='search' placeholder='...جست و جو'/>
                        </Menu.Item>
                    </Menu.Menu>

                </Menu>
            </div>
        );
    }
}
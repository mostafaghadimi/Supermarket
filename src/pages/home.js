import React, {Component} from 'react';
import {Snackbar, Drawer, MenuItem, FlatButton, CircularProgress, Dialog, RaisedButton, TextField} from "material-ui";
import {
    flatButtonDivStyle,
    flatButtonLabelStyle,
    homePage,
    mainDiv
} from "../assets/material";
import AppBar from 'material-ui/AppBar';

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            sign_in: false,
            sign_up: false,
            left_drawer: false,
            snack_state: false,
            snack_text: "",
        };
    }

    render() {
        return (
            <div style={Object.assign({}, mainDiv)}>
                <AppBar
                    title='SuperMarker'
                    onLeftIconButtonClick={() => {
                        this.setState({
                            left_drawer: true,
                        })
                    }}
                    iconElementRight={
                        <div style={flatButtonDivStyle}>
                            <FlatButton labelStyle={flatButtonLabelStyle} onClick={() => {
                                this.setState({
                                    sign_up: true,
                                })
                            }} label="Sign Up"/>
                            <FlatButton labelStyle={flatButtonLabelStyle} onClick={() => {
                                this.setState({
                                    sign_in: true,
                                })
                            }} label="Sign In"/>
                        </div>
                    }
                />
                <Dialog
                    contentStyle={{textAlign: "center", width: "350px"}}
                    title="Sign In"
                    autoScrollBodyContent={true}
                    actions={
                        <div>
                            <FlatButton
                                label="Cancel"
                                primary={true}
                                onClick={() => {
                                    this.setState({
                                        sign_in: false,
                                    })
                                }}
                            />
                            <RaisedButton
                                label="Sign In"
                                primary={true}
                                onClick={() => {
                                    // parseSignIn(
                                    //     this.state,
                                    //     this.signInSuccess,
                                    //     this.props.addSnackText,
                                    //     this.props.setLoading)
                                }}
                            />
                        </div>
                    }
                    modal={false}
                    open={this.state.sign_in}
                    onRequestClose={() => {
                        this.setState({
                            sign_in: false,
                        })
                    }}
                >
                    <TextField
                        name="username"
                        hintText="Username"
                        floatingLabelText="Username"
                        onChange={this.onChange}
                        type="text"
                        // value={this.state.username}
                    />
                    <TextField
                        name="password"
                        hintText="Password"
                        floatingLabelText="Password"
                        onChange={this.onChange}
                        type="password"
                        // value={this.state.password}
                    />
                </Dialog>
                <Dialog
                    contentStyle={{textAlign: "center", width: "350px"}}
                    title="Sign Up"
                    autoScrollBodyContent={true}
                    actions={
                        <div>
                            <FlatButton
                                label="Cancel"
                                primary={true}
                                onClick={() => {
                                    this.setState({
                                        sign_up: false,
                                    })
                                }}
                            />
                            <RaisedButton
                                label="Sign Up"
                                primary={true}
                                onClick={() => {
                                }}
                            />
                        </div>
                    }
                    modal={false}
                    open={this.state.sign_up}
                    onRequestClose={() => {
                        this.setState({
                            sign_up: false,
                        })
                    }}
                >
                    <TextField
                        name="username"
                        hintText="Username"
                        floatingLabelText="Username"
                        onChange={this.onChange}
                        type="text"
                        // value={this.state.username}
                    />
                    <TextField
                        name="email"
                        hintText="Email"
                        floatingLabelText="Email"
                        onChange={this.onChange}
                        type="email"
                        // value={this.state.email}
                    />
                    <TextField
                        name="password"
                        hintText="Password"
                        floatingLabelText="Password"
                        onChange={this.onChange}
                        type="password"
                        // value={this.state.password}
                    />
                </Dialog>
                <Drawer
                    docked={false}
                    width={250}
                    open={this.state.left_drawer}
                    onRequestChange={
                        () => {
                            this.setState({
                                left_drawer: false,
                            })
                        }
                    }
                >
                    <MenuItem onClick={() => {
                    }}>About</MenuItem>
                    <MenuItem onClick={() => {
                    }}>Contact US</MenuItem>
                </Drawer>
                <Dialog
                    contentStyle={{textAlign: "center", width: "350px"}}
                    title="Loading"
                    autoScrollBodyContent={true}
                    // actions={
                    //     <div>
                    //         <RaisedButton
                    //             label="Cancel"
                    //             primary={true}
                    //             onClick={() => {
                    //                 this.props.closeDialog()
                    //             }}
                    //         />
                    //     </div>
                    // }
                    modal={false}
                    open={this.state.loading}
                    // onRequestClose={() => {
                    //     this.props.closeDialog()
                    // }}
                >
                    <CircularProgress size={80} thickness={5}/>
                </Dialog>
                <Snackbar
                    open={this.state.snack_state}
                    message={this.state.snack_text}
                    autoHideDuration={5000}
                    onRequestClose={
                        () => {
                            this.setState({
                                snack_state: false,
                                snack_text: "",
                            })
                        }

                    }
                />
                <div style={Object.assign({}, homePage)}>
                </div>
            </div>
        );
    }
}

export default HomePage;
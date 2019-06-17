import React, {Component} from "react";

import {AuthProvider} from "../authContext";

class Auth extends Component {

    constructor() {
        super();
        let state;
        let serializedState = localStorage.getItem("user");
        if (serializedState != null) {
            state = JSON.parse(serializedState);
        } else {
            state = {
                authenticated: false,
                user: {},
                accessToken: ""
            };
        }
        this.state = state
    }


    initiateLogin = () => {
        // auth.authorize();
    };

    logout = () => {
        this.setState({
            authenticated: false,
            user: {},
            accessToken: ""
        });
    };

    handleAuthentication = () => {
        // auth.parseHash((error, authResult) => {
        //     if (error) {
        //         console.log(error);
        //         console.log(`Error ${error.error} occured`);
        //         return;
        //     }
        //
        //     this.setSession(authResult.idTokenPayload);
        // });
    };

    setSession(authResult) {
        // const user = {
        //     id: data.sub,
        //     email: data.email,
        //     role: data[AUTH_CONFIG.roleUrl]
        // };
        // this.setState({
        //     authenticated: true,
        //     accessToken: data.accessToken,
        //     user
        // });
    }

    render() {
        const authProviderValue = {
            ...this.state,
            initiateLogin: this.initiateLogin,
            handleAuthentication: this.handleAuthentication,
            logout: this.logout
        };
        return (
            <AuthProvider value={authProviderValue}>
                {this.props.children}
            </AuthProvider>
        );
    }
}

export default Auth;
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomePage from './pages/home';
import DashboardPage from './pages/dashboard';
import CallbackPage from "./pages/callback";
import Auth from "./components/Auth";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <Auth>
        <MuiThemeProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/dashboard" component={DashboardPage}/>
                    <Route path="/callback" component={CallbackPage}/>
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    </Auth>,
    document.getElementById('root')
)
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from "react-alert-template-basic"


import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import History from './leads/History';
import Alerts from './layout/Alerts';
import Client from './layout/Client'

import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth'



//Alert options
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}


class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }
    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Client />
                            <Alerts />
                            {console.log('**********************************************')}

                            <div style={{ marginLeft: '3%' }}>
                                <Switch>
                                    <PrivateRoute exact path="/" component={Dashboard} />
                                    <PrivateRoute exact path="/history" component={History} />
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    };
};


ReactDOM.render(<App />, document.getElementById('app'));
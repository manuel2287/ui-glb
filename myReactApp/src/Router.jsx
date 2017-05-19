import React, {Component} from 'react';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import {Route} from 'react-router';
import {connect} from 'react-redux';
import App from './App.jsx';

class Router extends Component {
    render(){
        return (
            <ConnectedRouter history={this.props.history}>
                <Route path="/" component={App} />
            </ConnectedRouter>
        );
    }
}

export default connect()(Router);
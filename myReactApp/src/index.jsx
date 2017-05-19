import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import appReducer from './reducer';
import Router from './Router.jsx';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'react-router-redux';

const logger = createLogger();
const history = createBrowserHistory();
const routing = routerMiddleware(history);
const middleware = applyMiddleware(logger, ReduxThunk, routing)(createStore);
const store = middleware(appReducer);

ReactDOM.render( 
    <Provider store = { store } >
        <Router history={history} />
    </Provider>,
    document.getElementById("app"));
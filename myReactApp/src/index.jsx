import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import appReducer from './reducer';
import Router from './Router.jsx';
import {createBrowserHistory} from 'history';
import {routerMiddleware, push} from 'react-router-redux';

const logger = createLogger({diff:true});
const history = createBrowserHistory();
const routing = routerMiddleware(history);
const middleware = applyMiddleware(logger, ReduxThunk, routing)(createStore);
const store = middleware(appReducer);

store.dispatch(push(window.location.pathname));
ReactDOM.render( 
    <Provider store = { store } >
        <Router history={history} />
    </Provider>,
    document.getElementById("app"));
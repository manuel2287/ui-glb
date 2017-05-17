import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import appReducer from './reducer'
import App from './App.jsx';

const logger = createLogger();

const middleware = applyMiddleware(logger, ReduxThunk)(createStore);

const store = middleware(appReducer);

ReactDOM.render( <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>,
    document.getElementById("app"));
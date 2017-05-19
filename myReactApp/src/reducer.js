import { combineReducers } from 'redux';
import app from './app-reducers';
import { routerReducer } from 'react-router-redux';
const appReducer = combineReducers({
    app,
    routing: routerReducer
});

export default appReducer;
import { combineReducers } from 'redux';
import app from './app-reducers';

const appReducer = combineReducers({
    app
});

export default appReducer;
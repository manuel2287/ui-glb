import { combineReducers } from 'redux';
import app from './app-reducers';
import optionalProducts from './containers/optional-products/reducers';
import cards from './containers/card-container/reducer';
import { routerReducer } from 'react-router-redux';
const appReducer = combineReducers({
    app,
    optionalProducts,
    routing: routerReducer
});

export default appReducer;
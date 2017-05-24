import {
    FETCH_OPTIONAL_PRODUCTS,
    RECEIVE_OPTIONAL_PRODUCTS,
    ERROR_IN_FETCH_OPTIONAL_PRODUCTS
} from './constants';

const optionalProducts = (state = {
    isFetching: false,
    products: [],
    error: null
}, action) => {
    switch (action.type) {
        case FETCH_OPTIONAL_PRODUCTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_OPTIONAL_PRODUCTS:
            return Object.assign({}, state, {
                isFetching: false,
                products: action.optionalProducts
            });
        case ERROR_IN_FETCH_OPTIONAL_PRODUCTS:
            return Object.assign({}, state, {
                isFetching: false,
                hasError: true,
                error: action.error
            });
        default:
            return state;
    }
}

export default optionalProducts;
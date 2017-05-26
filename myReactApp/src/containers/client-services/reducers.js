import {
    RECEIVE_CLIENT_SERVICES,
    FETCH_CLIENT_SERVICES,
    ERROR_ON_CALL_CLIENT_SERVICES
} from './constants';

const clientServices = (state = {
    isFetching: false,
    services: [],
    error: null
}, action) => {
    switch (action.type) {
        case FETCH_CLIENT_SERVICES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CLIENT_SERVICES:
            return Object.assign({}, state, {
                isFetching: false,
                services: action.clientServices
            });
        case ERROR_ON_CALL_CLIENT_SERVICES:
            return Object.assign({}, state, {
                isFetching: false,
                hasError: true,
                error: action.error
            });
        default:
            return state;
    }
}

export default clientServices;
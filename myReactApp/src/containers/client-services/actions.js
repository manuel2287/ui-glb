import {
    RECEIVE_CLIENT_SERVICES,
    CLIENT_SERVICES_API,
    FETCH_CLIENT_SERVICES,
    ERROR_ON_CALL_CLIENT_SERVICES
} from './constants';
import axios from 'axios';

const fetch = () => {
    return {
        type: FETCH_CLIENT_SERVICES
    }
}

const receiveClientServices = (clientServices) => {
    return {
        type: RECEIVE_CLIENT_SERVICES,
        clientServices
    }
}

const failInClientServices = (error) => {
    return {
        type: ERROR_ON_CALL_CLIENT_SERVICES,
        error
    }
}

export const fetchClientServices = () => {
    return dispatch => {
        dispatch(fetch());
        return axios
            .get(CLIENT_SERVICES_API)
            .then(response => response.data.services)
            .then(services => dispatch(receiveClientServices(services)))
            .catch(error => dispatch(failInClientServices(error)));
    }
}
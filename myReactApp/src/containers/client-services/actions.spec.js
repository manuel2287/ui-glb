import mockStore from 'redux-mock-store';
import { fetchClientServices } from './actions';
import {
    FETCH_CLIENT_SERVICES,
    ERROR_ON_CALL_CLIENT_SERVICES,
    RECEIVE_CLIENT_SERVICES,
    CLIENT_SERVICES_API
} from './constants';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const middleware = [thunk];
const mockedStore = mockStore(middleware);

const axiosMock = new MockAdapter(axios);

describe('Client Services Actions', () => {

    it('Client Services should be Ok :)', () => {
        axiosMock
            .onGet('/api/client-services')
            .reply(200, {
                "services": [{
                    "image": "image",
                    "text": "text",
                    "title": "title",
                    "alt": "alt",
                    "link": "http://www.aerolineas.com.ar"
                }]
            });

        const expectedActions = [
            { type: FETCH_CLIENT_SERVICES },
            {
                type: RECEIVE_CLIENT_SERVICES,
                clientServices: [{
                    "alt": "alt",
                    "image": "image",
                    "link": "http://www.aerolineas.com.ar",
                    "text": "text",
                    "title": "title"
                }]
            }
        ]

        const store = mockedStore({
            clientServices: {
                isFetching: false,
                services: [],
                error: null
            }
        });

        return store.dispatch(fetchClientServices()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });


    });

});
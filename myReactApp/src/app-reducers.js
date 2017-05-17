import { APP_GET_BUSY, APP_GET_READY } from './app-constants';

const app = (state = { ready: false }, action) => {
    switch (action.type) {
        case APP_GET_BUSY:
            return Object.assign({}, state, {
                ready: false,
                busy: true
            });
        case APP_GET_READY:
            return Object.assign({}, state, {
                busy: false,
                ready: true
            })
        default:
            return state;
    }
}

export default app;
import { APP_GET_BUSY, APP_GET_READY } from './app-constants';

export const appGetBusy = (data) => {
    return {
        type: APP_GET_BUSY,
        data
    }
}

export const appGetReady = (data) => {
    return {
        type: APP_GET_READY,
        data
    }
}
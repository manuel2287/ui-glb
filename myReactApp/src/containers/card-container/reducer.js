import { REDIRECT, INIT_CARDS } from './constants';

const cards = (state = {
    cards: [],
    type: "",
    isTracked: false,
    initialized: false
}, action) => {
    switch (action.type) {
        case INIT_CARDS:
            return Object.assign({}, state, {
                cards: action.cards,
                type: action.cardType,
                isTracked: true,
                initialized: true
            });
        case REDIRECT:
        default:
            return state;
    }
}

export default cards;
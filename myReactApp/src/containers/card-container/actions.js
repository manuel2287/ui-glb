import { REDIRECT, INIT_CARDS } from './constants';

export const initCard = (cards, cardType) => {
    return {
        type: INIT_CARDS,
        cards,
        cardType
    }
}

export const redirect = (link) => {
    window.redirect = link;
    return {
        type: REDIRECT
    }
}
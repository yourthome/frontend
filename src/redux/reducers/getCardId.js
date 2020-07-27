import { GET_CARD_ID } from '../actions/constants'

const initialState = {
    cardId: ''
}

export const getCardId = (state = initialState, action) => {
    switch (action.type) {
        case GET_CARD_ID:
            return {
                cardId: action.value
            };

        default: 
            return {
                ...state
        };   
    }
};
import { GET_RENTAL_ID } from '../actions/constants'

const initialState = {
    rentalId: ''
}

export const getRentalID = (state = initialState, action) => {
    switch (action.type) {
        case GET_RENTAL_ID:
            return {
                rentalId: action.payload
            };

        default: 
            return {
                ...state
        };   
    }
};
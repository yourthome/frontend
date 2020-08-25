import { GET_RENTAL_BY_ID } from '../actions/constants'

const initialState = {
    rentalById: ''
}

export const getRentalById = (state = initialState, action) => {
    switch (action.type) {
        case GET_RENTAL_BY_ID:
            return {
                rentalById: action.payload
            };

        default: 
            return {
                ...state
        };   
    }
};
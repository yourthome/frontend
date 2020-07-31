import { userConstants } from '../_constants';

const initialState = {
    rentals: [],
}

export const getUserRentalsData = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.GETALL_USERRENTALS_REQUEST:
            return { 
                loading: true          
            }
        case userConstants.GETALL_USERRENTALS_SUCCESS:
            return {
                ...state, rentals: action.rentals 
            };
        case userConstants.GETALL_USERRENTALS_FAILURE:
            return { 
                error: action.error
            };
            
        default: return state;
    }
}
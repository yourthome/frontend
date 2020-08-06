import {SET_SEARCH_VALUE_RENTALS } from '../actions/constants'

const initialState = {
    data: [],
}

export const searchValRentals = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE_RENTALS:
            return { 
                ...state, data: action.payload
            }
            
        default: return state;
    }
}
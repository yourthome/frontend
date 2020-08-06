import {SET_SEARCH_VALUE_USERS } from '../actions/constants'

const initialState = {
    data: '',
}

export const searchValUsers = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE_USERS:
            return { 
                ...state, data: action.payload
            }
            
        default: return state;
    }
}
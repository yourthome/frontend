import {GET_FILTER_RESULT } from '../actions/constants'

const initialState = {
    data: [],
}

export const getFilterData = (state = initialState, action) => {
    switch (action.type) {
        case GET_FILTER_RESULT:
            return { 
                ...state, data: action.data
            }
            
        default: return state;
    }
}
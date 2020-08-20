import {GET_MAP_FILTER_RESULT } from '../actions/constants'

const initialState = {
    data: [],
}

export const getMapFilterData = (state = initialState, action) => {
    switch (action.type) {
        case GET_MAP_FILTER_RESULT:
            return { 
                ...state, data: action.data
            }
            
        default: return state;
    }
}
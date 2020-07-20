import { FETCH_DATA, GET_FILTER_RESULT } from '../actions/constants'

const initialState = {
    data: [],
}

export const getData = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { 
                ...state, data: action.payload 
            }
            
        default: return state;
    }
}
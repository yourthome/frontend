import { GET_DATA_ADMIN } from '../actions/constants'

const initialState = {
    data: [],
}

export const getDataAdmin = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_ADMIN:
            return { 
                ...state, data: action.payload 
            }
            
        default: return state;
    }
}
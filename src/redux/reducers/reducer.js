import { FETCH_DATA } from '../actions/actions'

const initialState = {
    data: [1]
}

export const getData = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_DATA:
            return { 
                ...state, data: action.payload 
            }
            
        default: return state;
    }
}
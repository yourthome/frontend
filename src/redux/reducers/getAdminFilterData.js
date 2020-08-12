import {GET_ADMIN_FILTER_RESULT } from '../actions/constants'

const initialState = {
    data: [],
}

export const getAdminFilterData = (state = initialState, action) => {
    switch (action.type) {
        case GET_ADMIN_FILTER_RESULT:
            return { 
                ...state, data: action.data
            }
            
        default: return state;
    }
}
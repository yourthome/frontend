import {GET_MAP_FILTER_RESULT } from '../actions/constants'

const initialState = {
    filteredMapData: [],
}

export const getMapFilterData = (state = initialState, action) => {
    switch (action.type) {
        case GET_MAP_FILTER_RESULT:
            return { 
                ...state, filteredMapData: action.filteredMapData
            }
            
        default: return state;
    }
}
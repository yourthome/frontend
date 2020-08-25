import { FETCH_MAP_DATA } from '../actions/constants'

const initialState = {
    mapData: [],
}

export const getMapData = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MAP_DATA:
            return { 
                ...state, mapData: action.payload 
            }
            
        default: return state;
    }
}
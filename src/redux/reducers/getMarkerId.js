import { GET_MARKER_ID } from '../actions/constants'

const initialState = {
    markerId: ''
}

export const getMarkerId = (state = initialState, action) => {
    switch (action.type) {
        case GET_MARKER_ID:
            return {
                markerId: action.value
            };

        default: 
            return {
                ...state
        };   
    }
};
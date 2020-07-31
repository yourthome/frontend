import {SET_SEARCH_VALUE} from '../actions/constants';

const initialState = {
    search: ''
};

export const setSearchVal = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_VALUE:
            return { 
                ...state, search: action.payload
            };

        default: 
            return state
    }
}
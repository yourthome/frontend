import {ADD_FILTER_CHARECTER} from '../actions/constants';

const initialState = {
    region: ''
};

export const setFilterItem = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILTER_CHARECTER:
            return { 
                ...state, region: action.region
            };

        default: 
            return state
    }
}
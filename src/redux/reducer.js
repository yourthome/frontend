import {FETCH_DATA} from './constants'

const initialState = {
    data: [1]
}


export const getData = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_DATA:
            return {...state, data: action.payload}
    }
    return state
}
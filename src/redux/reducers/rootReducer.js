import { combineReducers } from "redux";

import { getData } from './reducer'
import { getCardId } from './getCardId'

export const rootReducer = combineReducers({
    getData: getData,
    getCardId: getCardId
})
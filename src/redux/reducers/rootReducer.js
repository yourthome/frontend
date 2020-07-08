import { combineReducers } from "redux";

import {getData} from './reducer'

export const rootReducer = combineReducers({
    getData: getData,
})
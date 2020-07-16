import { combineReducers } from "redux";

import { getData } from './reducer'
import { getCardId } from './getCardId'
import {appReducer} from './appReducer'

export const rootReducer = combineReducers({
    getData: getData,
    getCardId: getCardId,
    app: appReducer
})
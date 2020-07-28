import { combineReducers } from "redux";

import { getData } from './reducer'
import { getCardId } from './getCardId'
import {appReducer} from './appReducer'
import {setFilterItem} from './filterItems'
import {getFilterData} from './filterReducer'

export const rootReducer = combineReducers({
    getData: getData,
    getCardId: getCardId,
    app: appReducer,
    filter: setFilterItem,
    getFilterData: getFilterData,
})
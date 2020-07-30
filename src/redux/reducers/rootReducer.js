import { combineReducers } from "redux";

import { getData } from './reducer'
import { getCardId } from './getCardId'
import { appReducer } from './appReducer'
import { sendUser } from './sendUser'
import { authentication } from '../auth_redux/_reducers/authentication.reducer';
import { registration } from '../auth_redux/_reducers/registration.reducer';
import { users } from '../auth_redux/_reducers/users.reducer';
import { alert } from '../auth_redux/_reducers/alert.reducer';
import { setFilterItem } from './filterItems'
import { getFilterData } from './filterReducer'
import { getDataAdmin } from './getDataAdmin'

export const rootReducer = combineReducers({
    getData: getData,
    getCardId: getCardId,
    app: appReducer,
    sendUser: sendUser,
    authentication,
    registration,
    users,
    alert,
    filter: setFilterItem,
    getFilterData: getFilterData,
    getDataAdmin: getDataAdmin
})
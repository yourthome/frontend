import { combineReducers } from "redux";

import { getData } from './reducer'
import { getCardId } from './getCardId'
import { appReducer } from './appReducer'
import { authentication } from '../auth_redux/_reducers/authentication.reducer';
import { registration } from '../auth_redux/_reducers/registration.reducer';
import { users } from '../auth_redux/_reducers/users.reducer';
import { alert } from '../auth_redux/_reducers/alert.reducer';
import { setFilterItem } from './filterItems'
import { getFilterData } from './filterReducer';
import {setSearchVal} from './searchInp';
import { getUserRentalsData } from '../auth_redux/_reducers/userRentals.reducer'
import { getDataAdmin } from './getDataAdmin';
import { postNewRentalData } from '../auth_redux/_reducers/postNewRental';
import { searchValRentals } from '../reducers/searchValRentals';
import { searchValUsers } from '../reducers/searchValUsers';
import { getRentalID } from "./getRentalID";
import { getAdminFilterData } from './getAdminFilterData';

export const rootReducer = combineReducers({
    getData: getData,
    getCardId: getCardId,
    app: appReducer,
    authentication,
    registration,
    users,
    alert,
    filter: setFilterItem,
    getFilterData: getFilterData,
    getDataAdmin: getDataAdmin,
    setSearchVal: setSearchVal,
    getUserRentalsData: getUserRentalsData,
    postNewRentalData: postNewRentalData,
    searchValRentals: searchValRentals,
    searchValUsers: searchValUsers,
    getRentalID: getRentalID,
    getAdminFilterData: getAdminFilterData
})
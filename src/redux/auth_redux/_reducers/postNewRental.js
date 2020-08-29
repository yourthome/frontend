import { userConstants } from '../_constants';

export function postNewRentalData(state = {}, action) {
  switch (action.type) {
    case userConstants.POST_NEW_RENTAL_REQUEST:
      return { posting: true };
    case userConstants.POST_NEW_RENTAL_SUCCESS:
      return { posted: true };
    case userConstants.POST_NEW_RENTAL_FAILURE:
      return {};
    case userConstants.POST_NEW_RENTAL_SUCCESS_AFTER:
      return { posted: false };
    default:
      return state
  }
}
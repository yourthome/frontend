import { userConstants } from '../_constants';

export function postNewRentalData(state = {}, action) {
  switch (action.type) {
    case userConstants.POST_NEW_RENTAL_REQUEST:
      return { posting: true };
    case userConstants.POST_NEW_RENTAL_SUCCESS:
      return {};
    case userConstants.POST_NEW_RENTAL_FAILURE:
      return {};
    default:
      return state
  }
}
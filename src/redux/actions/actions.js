import { FETCH_DATA, GET_CARD_ID } from './constants';

const fetchData = () => {
  return async dispatch => {
    const response = await fetch('https://yourthometest.herokuapp.com/rentals')
    const json = await response.json()
    dispatch({type: FETCH_DATA, payload: json})
  }
}

const getCardId = (value) => {
  return {
    type: GET_CARD_ID,
    value
  }
}

export {
  fetchData,
  getCardId
};
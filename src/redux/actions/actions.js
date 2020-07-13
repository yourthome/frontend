import { FETCH_DATA, GET_CARD_ID } from './constants';

const fetchData = () => {
  return async dispatch => {
    const response = await fetch(process.env.REACT_APP_CARDS_API_URL)
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
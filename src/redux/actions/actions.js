import { FETCH_DATA, GET_CARD_ID } from './constants';
import axios from 'axios'

const fetchData = () => {
  return async dispatch => {
    await axios.get('https://yourthometest.herokuapp.com/rentals')
    .then(res => {
      dispatch(fetchDataSuccess(res.data))
    })
  }
}

const fetchDataSuccess = (json) => {
  return {
    type: FETCH_DATA,
    payload: json
  }
}

const getCardId = (value) => {
  return  {
    type: GET_CARD_ID,
    value
  }
}

export {
  fetchData,
  fetchDataSuccess,
  getCardId
};
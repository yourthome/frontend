import { FETCH_DATA, GET_CARD_ID } from './constants';
import axios from 'axios'

<<<<<<< HEAD
function fetchData() { 
    return async dispatch =>{
    const response = await fetch('https://yourthometest.herokuapp.com/rentals')
    const json = await response.json()
    dispatch({type: FETCH_DATA, payload: json })
  }}

=======
const fetchData = () => {
  return async dispatch => {
    await axios.get('https://yourthometest.herokuapp.com/rentals')
    .then(res => {
      dispatch(fetchDataSuccess(res.data))
    })
  }
}
>>>>>>> 2b5f718d1dd9630e84e16f19b6ee3f1e859fd337

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
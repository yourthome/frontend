import { FETCH_DATA, GET_CARD_ID, SHOW_LOADER, HIDE_LOADER } from './constants';
import axios from 'axios'


function showLoader(){
  return{
    type: SHOW_LOADER
  }
}

function hideLoader(){
  return{
    type: HIDE_LOADER
  }
}


const fetchDataSuccess = (json) => {
  return {
    type: FETCH_DATA,
    payload: json
  }
}

const fetchData = () => {
  return async dispatch => {
    dispatch(showLoader())
    await axios.get('https://yourthometest.herokuapp.com/rentals')
    .then(res => {
      dispatch(fetchDataSuccess(res.data))
      dispatch(hideLoader())
    })
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
  getCardId,
  showLoader,
  hideLoader,
};
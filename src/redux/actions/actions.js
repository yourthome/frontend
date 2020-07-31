import { FETCH_DATA, GET_CARD_ID, SHOW_LOADER, HIDE_LOADER, ADD_FILTER_CHARECTER, GET_FILTER_RESULT, GET_DATA_ADMIN } from './constants';
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


function getFilterData(items){
  return async dispatch => {
    dispatch(showLoader())
    let itemsArr = items.region.slice(0, -1)
    const response = await fetch(`https://yourthometest.herokuapp.com/rentals?${itemsArr}`)
    const json = await response.json()
    dispatch({type: GET_FILTER_RESULT, data: json})
    dispatch(hideLoader())
  }
}

const getCardId = (value) => {
  return  {
    type: GET_CARD_ID,
    value
  }
}

const setFilterItems = (region) => {
  return{
    type: ADD_FILTER_CHARECTER,
    region: region
  }
}

export function getDataAdmin() {
  return async dispatch => {
    const response = await fetch('https://yourthometest.herokuapp.com/rentals')
    const json = await response.json()
    dispatch({ type: GET_DATA_ADMIN, payload: json})
  }
} 


export {
  fetchData,
  fetchDataSuccess,
  getCardId,
  showLoader,
  hideLoader,
  setFilterItems,
  getFilterData
};
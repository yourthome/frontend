import { FETCH_DATA, FETCH_MAP_DATA, GET_CARD_ID, GET_MARKER_ID, GET_RENTAL_BY_ID, SHOW_LOADER, HIDE_LOADER, ADD_FILTER_CHARECTER, GET_FILTER_RESULT, GET_DATA_ADMIN, SET_SEARCH_VALUE, SET_SEARCH_VALUE_RENTALS, SET_SEARCH_VALUE_USERS, GET_RENTAL_ID, GET_ADMIN_FILTER_RESULT, GET_MAP_FILTER_RESULT } from './constants';
import axios from 'axios'

/* ДЛЯ ЛОУДЕРОВ */
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


/* ДЛЯ ОБЩЕГО GET-ЗАПРОСА */
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


/* ДЛЯ GET-ЗАПРОСА ТОЛЬКО ДЛЯ КАРТЫ */
const fetchMapDataSuccess = (json) => {
  return {
    type: FETCH_MAP_DATA,
    payload: json
  }
}

const fetchMapData = () => {
  return async dispatch => {
    dispatch(showLoader())
    await axios.get('https://yourthometest.herokuapp.com/rentals')
    .then(response => {
      dispatch(fetchMapDataSuccess(response.data))
      dispatch(hideLoader())
    })
  }
}


/* ДЛЯ ФИЛЬТРА ПО ОБЪЯВЛЕНИЯМ */
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

/* ДЛЯ ФИЛЬТРА ПО КАРТЕ */
function getMapFilterData(items){
  return async dispatch => {
    let itemsArr = items.slice(0, -1)
    const response = await fetch(`https://yourthometest.herokuapp.com/rentals?${itemsArr}`)
    const json = await response.json()
    dispatch({type: GET_MAP_FILTER_RESULT, filteredMapData: json})
  }
}

/* ДЛЯ ФИЛЬТРА ОБЪЯВЛЕНИЙ В АДМИНКЕ */
function getAdminFilterData(items){
  return async dispatch => {
    const response = await fetch(`https://yourthometest.herokuapp.com/rentals?${items}`)
    const json = await response.json()
    dispatch({type: GET_ADMIN_FILTER_RESULT, data: json})
  }
}


/* ДЛЯ ПОЛУЧЕНИЯ id - КАРТОЧКИ */
const getCardId = (value) => {
  return  {
    type: GET_CARD_ID,
    value
  }
}

/* ДЛЯ ПОЛУЧЕНИЯ id - ОБЪЯВЛЕНИЙ */
const getRentalID = (id) =>{
  return  {
    type: GET_RENTAL_ID,
    payload: id
  }
}

/* ДЛЯ ПОЛУЧЕНИЯ id - МАРКЕРА НА КАРТЕ */
const getMarkerId = (value) =>{
  return  {
    type: GET_MARKER_ID,
    value
  }
}


/* ДЛЯ ДОБАВЛЕНИЯ ПАРАМЕТРОВ ФИЛЬТРА */
const setFilterItems = (region) => {
  return{
    type: ADD_FILTER_CHARECTER,
    region: region
  }
}


// const searching = (value) => {
//   return{
//     type: SEARCH_RENTAL_TITLE,
//     payload: value
//   }
// }


/* ДЛЯ ПОИСКА */
const setSearchVal = (value) => {
  return  {
    type: SET_SEARCH_VALUE,
    payload: value.toLowerCase()
  }
}

const setSearchValRentals = (value) => {
  return  {
    type: SET_SEARCH_VALUE_RENTALS,
    payload: value.toLowerCase()
  }
}


/* ДЛЯ ПОИСКА ПОЛЬЗОВАТЕЛЕЙ */
const setSearchValUsers = (value) => {
  return  {
    type: SET_SEARCH_VALUE_USERS,
    payload: value.toLowerCase()
  }
}

/* ДЛЯ ПОИСКА ОБЪЯВЛЕНИЙ В АДМИНКЕ */
export function getDataAdmin() {
  return async dispatch => {
    const response = await fetch('https://yourthometest.herokuapp.com/rentals')
    const json = await response.json()
    dispatch({ type: GET_DATA_ADMIN, payload: json})
  }
} 


const getRentalById = (id) => {
  return async dispatch => {
    await axios.get(`https://yourthometest.herokuapp.com/rentals/${id}`)
    .then(json => {
      dispatch({ type: GET_RENTAL_BY_ID, payload: json })
    })
  }
}

// const fetchDataSuccess = (json) => {
//   return {
//     type: FETCH_DATA,
//     payload: json
//   }
// }

// const fetchData = () => {
//   return async dispatch => {
//     dispatch(showLoader())
//     await axios.get('https://yourthometest.herokuapp.com/rentals')
//     .then(res => {
//       dispatch(fetchDataSuccess(res.data))
//       dispatch(hideLoader())
//     })
//   }
// }


export {
  fetchData,
  fetchDataSuccess,
  getCardId,
  showLoader,
  hideLoader,
  setFilterItems,
  getFilterData,
  setSearchVal,
  setSearchValRentals,
  setSearchValUsers,
  getRentalID,
  getAdminFilterData,
  getMapFilterData,
  fetchMapDataSuccess,
  fetchMapData,
  getMarkerId, 
  getRentalById
};
import { FETCH_DATA, GET_CARD_ID, SHOW_LOADER, HIDE_LOADER, ADD_FILTER_CHARECTER, GET_FILTER_RESULT, GET_DATA_ADMIN, SET_SEARCH_VALUE, SET_SEARCH_VALUE_RENTALS, SET_SEARCH_VALUE_USERS, GET_RENTAL_ID, GET_ADMIN_FILTER_RESULT } from './constants';
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

function getAdminFilterData(items){
  return async dispatch => {
    const response = await fetch(`https://yourthometest.herokuapp.com/rentals?${items}`)
    const json = await response.json()
    dispatch({type: GET_ADMIN_FILTER_RESULT, data: json})
  }
}

// function getUserRentals(id){
//   return async dispatch => {
//     const response = await fetch(`https://yourthometest.herokuapp.com/rentals?${id}`)
//     const json = await response.json()
//     dispatch({type: GET_ADMIN_FILTER_RESULT, data: json})
//   }
// }

// function deleteRental(id){
//     return async dispatch => {
//       fetch(`https://yourthometest.herokuapp.com/Admin/rentals/${id}/delete`, {
//         method: 'DELETE',
//         header: {'Accept': 'application/json',
//                   'Content-Type': 'application/json'
//       }
//           })
//     }
// }

// function postNewRental(rental){
//   const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(rental)
// };

//   return fetch(`https://yourthometest.herokuapp.com/Rentals
//   `, requestOptions).then(handleResponse)
// }

// function handleResponse(response) {
//   return response.text().then(text => {
//       const data = text && JSON.parse(text);
//       return data;
//   });
// }

const getCardId = (value) => {
  return  {
    type: GET_CARD_ID,
    value
  }
}

const getRentalID = (id) =>{
  return  {
    type: GET_RENTAL_ID,
    payload: id
  }
}

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

const setSearchValUsers = (value) => {
  return  {
    type: SET_SEARCH_VALUE_USERS,
    payload: value.toLowerCase()
  }
}

export function getDataAdmin() {
  return async dispatch => {
    const response = await fetch('https://yourthometest.herokuapp.com/rentals')
    const json = await response.json()
    dispatch({ type: GET_DATA_ADMIN, payload: json})
  }
} 

// export function delRental(id){

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
  getAdminFilterData
};
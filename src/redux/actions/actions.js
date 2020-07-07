import { FETCH_DATA } from './constants';

const fetchData = () => {
    return async dispatch => {
        const response = await fetch('https://yourthomekg.herokuapp.com/rentals')
        const json = await response.json()
        dispatch({type: FETCH_DATA, payload: json})
    }
}

export {
    fetchData
};
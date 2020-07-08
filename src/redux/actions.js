import {FETCH_DATA} from './constants';

export function fetchData(){
    return async dispatch => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json()
        dispatch({type: FETCH_DATA, payload: json})
    }
}


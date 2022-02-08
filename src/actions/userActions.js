import axios from 'axios'
import {GET_USERS, SET_LOADING, USERS_ERROR} from './types'

export const getUsers =  () => async dispatch => {
    setLoading()
    try {
        const { data } = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')
        dispatch({
            type: GET_USERS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload:error.response.data
        })
    }
}

// Set loading to tru
export const setLoading = () => ({ type: SET_LOADING})
    



import axios from 'axios'
import {ADD_USER, GET_USERS, SET_LOADING, USERS_ERROR} from './types'


export const getUsers =  () => async dispatch => {
    
    try {
        setLoading()
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

export const addUser =  (userData, redirect) => async dispatch => {
    // const history = useHistory()
    try {
        setLoading()
        const { data } = await axios.post('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data', userData)
        dispatch({
            type: ADD_USER,
            payload: data
        })

        redirect()
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload:error.response.data
        })
    }
}

// Set loading to tru
export const setLoading = () => {
    return { type: SET_LOADING}
}
    



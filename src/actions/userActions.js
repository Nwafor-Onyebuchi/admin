import axios from 'axios'
import {ADD_USER, GET_USERS, SET_LOADING, USERS_ERROR, DELETE_USER, UPDATE_USER} from './types'


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

// Add user
export const addUser =  (userData, redirect) => async dispatch => {
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

// Delete user
export const deleteUser =  (userId, closeModal) => async dispatch => {
    console.log(userId)
    try {
        setLoading()
        const { data } = await axios.delete(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${userId}`)
        dispatch({
            type: DELETE_USER,
            payload: userId
        })
        closeModal()
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload:error
        })
    }
}

// Update user
export const updateUser =  (userId, redirect) => async dispatch => {
    try {
        setLoading()
        const { data } = await axios.put(`https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${userId}`)
        dispatch({
            type: UPDATE_USER,
            payload: data,
            userId
        })
        redirect()
    } catch (error) {
        dispatch({
            type: USERS_ERROR,
            payload:error
        })
    }
}

// Set loading to true
export const setLoading = () => {
    return { type: SET_LOADING}
}
    



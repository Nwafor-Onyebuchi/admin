import {GET_USERS, SET_LOADING, USERS_ERROR} from '../actions/types'

const initialState = {
    users: [],
    current: null,
    loading: false,
    error: null
}

const userReducer =  (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            console.log(action.payload)
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            };
        case USERS_ERROR:
            console.log(action.payload)
            return{
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}

export default userReducer
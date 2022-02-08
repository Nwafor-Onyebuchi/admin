import {GET_USERS, SET_LOADING, USERS_ERROR} from '../actions/types'

const initialState = {
    users: [],
    current: null,
    loading: true,
    error: null
}

const userReducer =  (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
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
            return{
                ...state,
                error: action.payload
            }
        default: 
            return state
    }
}

export default userReducer
import {ADD_USER, GET_USERS, SET_LOADING, USERS_ERROR} from '../actions/types'

const initialState = {
    users: [],
    current: null,
    loading: false,
    error: null
}

const userReducer =  (state = initialState, action) => {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false
            };
        case ADD_USER:
            
            return {
                ...state,
                users: [...state.users, action.payload],
                loading: false
            };
        
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
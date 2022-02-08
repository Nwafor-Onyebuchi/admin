import {ADD_USER, DELETE_USER, GET_USERS, SET_LOADING, UPDATE_USER, USERS_ERROR} from '../actions/types'

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
        case DELETE_USER:
        
            return {
                ...state,
                users: state.users.filter((user)=>user.id !==action.payload),
                loading: false
            };
        case UPDATE_USER:
            // console.log('id', action.userId)
            return {
                ...state,
                users: state.users.map((user)=>{
                    if(user.id === action.userId) {
                        return action.payload
                    }
                    return user
                }),
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
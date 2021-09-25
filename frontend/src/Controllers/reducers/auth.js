import { AUTH, LOGOUT, FETCH } from '../actionTypes'

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data }            
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null }
        case FETCH:
            return action.payload;         
        default:
            return state
    }
}

export default authReducer
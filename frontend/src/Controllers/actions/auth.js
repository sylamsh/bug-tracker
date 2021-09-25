import { AUTH, FETCH } from "../actionTypes";
import * as api from "../api";

export const signin = (userObject, setUser) =>  async (dispatch) => {
    try {
        const { data } = await api.signin(userObject)
        dispatch({ type: AUTH, data })
        setUser(JSON.parse(localStorage.getItem('profile')))
    } catch (error) {
        console.log(error)
    }
}

export const signup = (userObject, setUser) =>  async (dispatch) => {
    try {
        const { data } = await api.signup(userObject)
        dispatch({ type: AUTH, data })
        setUser(JSON.parse(localStorage.getItem('profile')))
    } catch (error) {
        console.log(error)
    }
}

export const getDevs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchDevs();
        dispatch({ type: FETCH, payload: data})
    } catch(error) {
        console.log(error.message)
    } 
}
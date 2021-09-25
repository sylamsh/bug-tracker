import { AUTH, FETCH } from "../actionTypes";
import * as api from "../api";

export const signin = (userObject, setUser, setEmailError, setPasswordError, setSignup) =>  async (dispatch) => {
    try {
        const { data } = await api.signin(userObject)
        dispatch({ type: AUTH, data })
        setUser(JSON.parse(localStorage.getItem('profile')))
    } catch (error) {
        if(error.response.status === 404) {
            // user doesn't exist
            setEmailError(prevState => {
                return {
                    ...prevState,
                    error: true,
                    message: error.response.data.message,
                }
            })
        } else if(error.response.status === 400) {
            // Invalid password
            setPasswordError(prevState => {
                return {
                    ...prevState,
                    error: true,
                    message: error.response.data.message,
                }
            })
        } else {
            // Something went wrong
            setSignup(prevState => {
                return {
                    ...prevState,
                    header: "Something went wrong",
                }
            })
        }
        console.log(error.message)
    }
}

export const signup = (userObject, setUser, setEmailError, setSignup) =>  async (dispatch) => {
    try {
        const { data } = await api.signup(userObject)
        dispatch({ type: AUTH, data })
        setUser(JSON.parse(localStorage.getItem('profile')))
    } catch (error) {
        if(error.response.status === 401) {
            // user already exists
            setEmailError(prevState => {
                return {
                    ...prevState,
                    error: true,
                    message: error.response.data.message,
                }
            })
        } else {
            // something went wrong
            setSignup(prevState => {
                return {
                    ...prevState,
                    header: "Something went wrong",
                }
            })
        }
        console.log(error.message)
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
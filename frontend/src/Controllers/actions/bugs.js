import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../actionTypes";
import * as api from "../api";

export const getBugs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBugs();
        dispatch({ type: FETCH_ALL, payload: data})
    } catch(error) {
        console.log(error.message)
    } 
}

export const createBug = (bug) => async(dispatch) => {
    try {
        const { data } = await api.createBug(bug)
        dispatch({ type: CREATE, payload: data})
    } catch(error) {
        console.log(error.message)
    }
}

export const updateBug = (id, bug) => async (dispatch) => {
    try {
        const { data } = await api.updateBug(id, bug)
        dispatch({ type: UPDATE, payload: data })
    } catch(error) {
        console.log(error.message)
    }
}

export const deleteBug = (id) => async (dispatch) => {
    try {
        await api.deleteBug(id)
        dispatch({ type: DELETE, payload: id})
    } catch(error) {
        console.log(error)
    }
}

export const resolveBug = (id) => async (dispatch) => {
    try {
        const { data } = await api.resolveBug(id)
        dispatch({ type: UPDATE, payload: data })
    } catch(error) {
        console.log(error)
    }
}

export const devRespond = (id, devResponse, editDevResponse) => async (dispatch) => {
    try {
        const { data } = await api.devRespond(id, devResponse)
        dispatch({ type: UPDATE, payload: data })
        editDevResponse()
    } catch(error) {
        console.log(error)
    }
}
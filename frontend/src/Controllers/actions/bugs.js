import * as api from "../api";

export const getBugs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchBugs();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch(error) {
        console.log(error.message)
    }
}

export const createBug = (bug) => async(dispatch) => {
    try {
        const { data } = await api.createBug(bug)
        dispatch({ type: 'CREATE', payload: data})
    } catch(error) {
        console.log(error.message)
    }
}

export const updateBug = (id, bug) => async (dispatch) => {
    try {
        const { data } = await api.updateBug(id, bug)
        console.log(data)
        dispatch({ type: 'UPDATE', payload: data })
    } catch(error) {
        console.log(error.message)
    }
}
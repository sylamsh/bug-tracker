import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name : "auth",
    initialState : {
        admin : false,
        LoggedIn : false,
    },
    reducers : {
        signIn : (state, action) => {
            const {name, password} = action.payload;
            state.LoggedIn = true;
            state.admin = true;
        },
        signOut : (state) => {
            state.LoggedIn = false;
            state.admin =  false; 
        },
        createUser : (state, action) => {},
    },
})

export default authSlice.reducer;
export const {signIn, signOut, createUser} = authSlice.actions;
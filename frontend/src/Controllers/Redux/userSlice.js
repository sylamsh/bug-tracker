import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : [{}],
    reducers : {
        getUser : (state) => {
            state.push({name : "Sylamsh"})
            state.push({name : "John"})
            state.push({name : "Samuel L.Jackson"})
            state.push({name : "Captain Hello World"})
        }
    }
})

export default userSlice.reducer;
export const {getUser} = userSlice.actions;
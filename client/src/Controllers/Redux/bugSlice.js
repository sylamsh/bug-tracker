import { createSlice } from '@reduxjs/toolkit'
import { retrieveBugs } from '../bugController'

const bugSlice = createSlice({
    name : "bugs",
    initialState : [],
    reducers : {
        getBugs : state => retrieveBugs(),
        createBugs : (state, action) => {},
        updateBugs : (state, action) => {},
        markResolved : (state, action) => {
            console.log("Resolved");
        }
    }
})

export default bugSlice.reducer;
export const {getBugs, createBugs, updateBugs, markResolved} = bugSlice.actions;
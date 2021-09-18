import { createSlice } from '@reduxjs/toolkit'
import { retrieveBugs } from '../bugController'

const bugSlice = createSlice({
    name : "bug",
    initialState : [],
    reducers : {
        getBugs : state => retrieveBugs(),
        createBugs : (state, action) => {},
        updateBugs : (state, action) => {},
        markResolved : (state, action) => {}
    }
})

export default bugSlice.reducer;
export const {getBugs, createBugs, updateBugs, markResolved} = bugSlice.actions;
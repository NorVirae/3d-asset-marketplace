import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: "store"
}

const userStateReducer = createSlice({
    name: "SignUp",
    initialState,
    reducers: {
        setSelectedSubPage(state, action){
            state.selected = action.payload.selected
        }
    }
})

export const {
    setSelectedSubPage
} = userStateReducer.actions

export default userStateReducer.reducer

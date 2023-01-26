import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selected: "store",
    selectedAdmin: "home"
}

const userStateReducer = createSlice({
    name: "SignUp",
    initialState,
    reducers: {
        setSelectedSubPage(state, action){
            state.selected = action.payload.selected
        }, 
        setSelectedSubPageAdmin(state, action){
            state.selectedAdmin = action.payload.selected
        }
    }
})

export const {
    setSelectedSubPage,
    setSelectedSubPageAdmin
} = userStateReducer.actions

export default userStateReducer.reducer

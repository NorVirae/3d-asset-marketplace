import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    merchandiseStore: null
}

const authReducer = createSlice({
    name: "SignUp",
    initialState,
    reducers: {
        signUp(state, action){
            state.user = action.payload.user
        },
        merchandiseStore(state, action){
            state.merchandiseStore = action.payload.merchandiseStore
        }
    }
})

export const {
    signUp,
    merchandiseStore
} = authReducer.actions

export default authReducer.reducer

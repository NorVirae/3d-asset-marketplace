import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const authReducer = createSlice({
    name: "SignUp",
    initialState,
    reducers: {
        signUp(state, action){
            state.user = action.payload.user
        }
    }
})

export const {
    signUp
} = authReducer.actions

export default authReducer.reducer

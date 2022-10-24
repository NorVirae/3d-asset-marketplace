import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userStateReducer from "./reducers/userStateReducer";

export const store = configureStore({
    reducer: {
        user: authReducer,
        userSubPageState: userStateReducer
    }
})



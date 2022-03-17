import { combineReducers } from "redux";




export const composedReducers = combineReducers({
    user:authReducer
})
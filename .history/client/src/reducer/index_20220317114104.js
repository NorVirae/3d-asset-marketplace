import { combineReducers } from "redux";
import { authReducer } from "./reducer";




export const composedReducers = combineReducers({
    user:authReducer
})
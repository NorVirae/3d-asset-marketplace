import { combineReducers } from "redux";
import { authReducer } from "./reducer";




export const root = combineReducers({
    user:authReducer,
})
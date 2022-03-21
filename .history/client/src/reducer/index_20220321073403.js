import { combineReducers } from "redux";
import { authReducer } from "./reducer";




export const rootReducer = combineReducers({
    user:authReducer,
})
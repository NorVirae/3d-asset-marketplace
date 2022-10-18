import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import { signUp } from "../redux/reducers/authReducer"
const baseUrl = "https://server.loooty.com"
let config = {
    Headers:{
        "Content-Type": "application/json"
    }
}

export const signUpAction = createAsyncThunk("auth/signup",
    async (params, thunkAPI) => {
        try{
            // console.log(params.signUpData, "DATA")

            const data = await axios.post(`${baseUrl}/api/auth/register`, params.signUpData, config)

            return data

        }catch(err){
            
            // console.log(err.response)
            console.log(err, "HAIL")
            
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const signInAction = createAsyncThunk("auth/signin", 
    async (params, thunkAPI) => {
        try{
            // console.log(params.signUpData, "DATA")

            const data = await axios.post(`${baseUrl}/api/auth/login`, params.signInData, config)
            thunkAPI.dispatch(signUp({user: data.data.data}))
            console.log(data.data.data, "HOLA")
            return data

        }catch(err){
            
            // console.log(err.response)
            console.log(err, "HAIL")
            
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const updateUserAction = createAsyncThunk("user/update", 
    async (params, thunkAPI) => {
        try{
            // console.log(params.signUpData, "DATA")
            const newConfig = {...config, "Authorization": `Bearer ${params.accessToken}`}

            const data = await axios.post(`${baseUrl}/api/user/update`, params.signInData, config)
            thunkAPI.dispatch(signUp({user: data.data.data}))
            console.log(data.data.data, "HOLA")
            return data

        }catch(err){
            
            // console.log(err.response)
            console.log(err, "HAIL")
            
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const logOutAction = createAsyncThunk("auth/logout", 
    async (_, thunkAPI) => {
        try{
            thunkAPI.dispatch(signUp({user: null}))
            toast.success("Log out was successful!")
        }catch(err){
            toast.error(err.message)
        }
    }
)
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import { logout, merchandiseStore, signUp } from "../redux/reducers/authReducer"
const baseUrl = "https://server.loooty.com"
let config = {
    headers:{
        "Content-Type": "application/json"
    }
}

export const signUpAction = createAsyncThunk("auth/signup",
    async (params, thunkAPI) => {
        try{

            const data = await axios.post(`${baseUrl}/api/auth/register`, params.signUpData, config)

            return data

        }catch(err){
            
            
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const signInAction = createAsyncThunk("auth/signin", 
    async (params, thunkAPI) => {
        try{

            const data = await axios.post(`${baseUrl}/api/auth/login`, params.signInData, config)
            thunkAPI.dispatch(signUp({user: data.data.data}))
            return data

        }catch(err){
            
            
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const createMerchandiseStore = createAsyncThunk("api/store", 
    async (params, thunkAPI) => {
        try{
            let state = thunkAPI.getState()
            const newConfig = {...config, "Content-Type": "application/form-data",  headers: {...config.headers, Authorization: `Bearer ${state.user.user.access_token}`, } }
            const data = await axios.post(`${baseUrl}/api/store/store`, params.storeInfo, newConfig)
            thunkAPI.dispatch(merchandiseStore({merchandiseStore: data.data.data.data[0]}))
            return data.data.data.data[0]

        }catch(err){
            
            
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const fetchMerchandiseStore = createAsyncThunk("api/store", 
    async (params, thunkAPI) => {
        try{
            let state = thunkAPI.getState()
            let teamKey = Object.keys(state.user.user.groups)[0]
            const newConfig = {...config, "Content-Type": "application/json",  headers: {...config.headers, Team: teamKey, Authorization: `Bearer ${state.user.user.access_token}`, } }
            const data = await axios.get(`${baseUrl}/api/store/me`, newConfig)
            thunkAPI.dispatch(merchandiseStore({merchandiseStore: data.data.data.data[0]}))
            return data.data.data.data[0]

        }catch(err){
            
            
            return thunkAPI.rejectWithValue(err)
        }
    }
)



export const fetchMerchandise = createAsyncThunk("api/store", 
    async (params, thunkAPI) => {
        try{
            let state = thunkAPI.getState()
            let teamKey = Object.keys(state.user.user.groups)[0]
            const newConfig = {...config, "Content-Type": "application/json",  headers: {...config.headers, Team: teamKey, Authorization: `Bearer ${state.user.user.access_token}`, } }
            const data = await axios.get(`${baseUrl}/api/store/me`, newConfig)
            thunkAPI.dispatch(merchandiseStore({merchandiseStore: data.data.data}))
            return data.data.data

        }catch(err){
                        
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const createMerchandise = createAsyncThunk("api/store", 
    async (params, thunkAPI) => {
        try{
            let state = thunkAPI.getState()
            let teamKey = Object.keys(state.user.user.groups)[0]
            const newConfig = {...config, "Content-Type": "application/form-data",  headers: {...config.headers, Team: teamKey, Authorization: `Bearer ${state.user.user.access_token}`, } }
            const data = await axios.post(`${baseUrl}/api/merchandise/store`, params.productInfo, newConfig)
            // thunkAPI.dispatch(merchandiseStore({merchandiseStore: data.data.data}))
            return data

        }catch(err){
            
            
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const updateUserAction = createAsyncThunk("user/update", 
    async (params, thunkAPI) => {
        try{
            const newConfig = {...config, "Authorization": `Bearer ${params.accessToken}`}

            const data = await axios.post(`${baseUrl}/api/user/update`, params.updateData, newConfig)
            thunkAPI.dispatch(signUp({user: data.data.data}))
            return data

        }catch(err){
            
            return thunkAPI.rejectWithValue(err)
        }
    }
)

export const logOutAction = createAsyncThunk("auth/logout", 
    async (_, thunkAPI) => {
        try{
            thunkAPI.dispatch(logout())
            toast.success("Log out was successful!")
        }catch(err){
            toast.error(err.message)
        }
    }
)
import axios from "axios"
const baseUrl = "https://server.loooty.com"
let config = {
    Headers:{
        "Content-Type": "application/json"
    }
}
export const signUp = async (signUpData) => {
    
        const data = await axios.post(`${baseUrl}/api/auth/register`, signUpData, config)
        console.log(data, "DATA")
    
}

export const signIn = async (signInDate) => {
    
    const data = await axios.post(`${baseUrl}/api/auth/login`, signInDate, config)
    console.log(data, "DATA")

}
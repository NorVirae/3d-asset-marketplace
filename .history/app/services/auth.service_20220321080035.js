const axios = require("axios");
const jwt = require('jsonwebtoken');
const User = require("../models/users.model")

require("dotenv").config();


const login = async (data) => {

    try{
        // const accessToken = jwt.sign(data.email, process.env.ACCESS_TOKEN_SECRET )
        
    }catch(err){
        console.log(err)
    }
    
}

const register = async (data) => {
    try{
        
        const user = new User({
            email: data.email,
            password: data.password
         })
 
         const newUser = await user.save()
         
         console.log(accessToken, "ACCESS ")
         return newUser
    }catch(err){
      
    }
}


module.exports = {
    login,
    register
}




const axios = require("axios");
const jwt = require('jsonwebtoken');

require("dotenv").config();


const login = async (data) => {

    try{
        const accessToken = jwt.sign(data.email, process.env.ACCESS_TOKEN_SECRET )
    }catch(err){
        console.log(err)
    }
    
}

const register = async (data) => {
    try{
        
      
    }catch(err){
      
    }
}


module.exports = {
    login,
    register
}




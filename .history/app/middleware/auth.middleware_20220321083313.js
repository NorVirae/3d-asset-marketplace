const jwt  = require("jsonwebtoken");
const User = require("../models/users.model");



const authticateToken = (req, res, next) => {
    const authToken = req.headers["authorization"]
    console.log(req.headers, authToken)
    if(!authToken) return res.status(403).json({data:"Token not provided"})
    const mainToken = authToken.split(" ")[1]
    jwt.verify(mainToken, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        console.log(user, "LOKO")
    })
    next()
}

const isEmailUnique = async (req, res, next) => {
    if (!req.body.email ||req.body.email === "" ||req.body.password ==="" || !req.body.password) return res.status(401).send({data:"email or password field empty"})

    const emailExist = await User.findOne({
        email:req.body.email
    })
    if (emailExist) return res.status(400).send({data:"user already registered"})
    
    next()
}

module.exports = {authticateToken, isEmailUnique}
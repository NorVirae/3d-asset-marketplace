const AuthServ = require("../services/auth.service");


 const login = (req, res) => {
    const result = AuthServ.login(req.body);
    console.log(req.body)
    res.status(200).send({
        message:"Payment fetch successful",
        status:true,
        data: result
    })
}

const register = (req, res) => {
    console.log("LOGIN")

    const result = AuthServ.register(req.body);
    res.status(200).send({
        message:"Payment fetch successful",
        status:true,
        data: result
    })
}

module.exports = {
    login,
    register
}
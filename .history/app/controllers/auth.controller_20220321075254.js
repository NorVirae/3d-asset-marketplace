const AuthServ = require("../services/auth.service");


 const login = async (req, res) => {
    console.log(req.body, "BODY")

    const result = await AuthServ.login(req.body);
    res.status(200).send({
        message:"Payment fetch successful",
        status:true,
        data: result
    })
}

const register = (req, res) => {
    console.log("LOGIN")

    try{
        const result = AuthServ.register(req.body);
        res.status(200).send({
            message:"Payment fetch successful",
            status:true,
            data: result
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            msg:"unable to "
        })
    }
}

module.exports = {
    login,
    register
}
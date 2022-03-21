const AuthServ = require("../services/auth.service");


 const login = async (req, res) => {

    try{
        console.log(req.body, "BODY")

        const result = await AuthServ.login(req.body);
        res.status(200).send({
            message:"Login was successful",
            status:true,
            data: result
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            msg:"unable to Login due to some crazy unknown reason"
        })
    }
}

const register = (req, res) => {
    console.log("LOGIN")

    try{
        const result = await  AuthServ.register(req.body);
        res.status(200).send({
            message:"Registration was successful",
            status:true,
            data: result
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            msg:"unable to register"
        })
    }
}

module.exports = {
    login,
    register
}
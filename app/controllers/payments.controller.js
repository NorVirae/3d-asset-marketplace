const { getAllTransactions, innitiateTranz, verifyTranz } = require('../services/payment.service');

const  axios = require('axios');

require("dotenv").config();

const getTransactions = async (req, res) => {
    try{
        console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
        const result = await getAllTransactions();
        console.log(result, "HErE");
        res.status(200).json(result);
    }catch(err){
        res.status(401).json({
            message:"error fetch data"
        })
    }
}

const innitiateTransaction = async (req, res) =>{
    console.log(req.body)
    try{
        console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
        const result = await innitiateTranz(req.body);
        console.log(result, "HErE");
        res.status(200).json(result);
    }catch(err){
        res.status(401).json({
            message:"error fetch data"
        })
    }
}

const verifyTransaction = async (req, res) =>{
    console.log(req.body)
    try{
        console.log(process.env.PAYSTACK_TEST_SECRET_KEY);
        const result = await verifyTranz(req.body);
        console.log(result, "HErE");
        res.status(200).json(result);
    }catch(err){
        res.status(401).json({
            message:"error fetch data"
        })
    }
}

module.exports = {
    getTransactions,
    innitiateTransaction,
    verifyTransaction
}

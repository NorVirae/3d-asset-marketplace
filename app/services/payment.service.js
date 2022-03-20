const axios = require("axios");

require("dotenv").config();

const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json', "Authorization":"Bearer "+process.env.PAYSTACK_LIVE_SECRET_KEY},
    // data: {
    //     email:"norbertmbafrank@gmail.com",
    //     amount:500,
    //     currency:"NGN",
    //     callback_url:"https://www.fischela.com",

    // },
    url:"https://api.paystack.co/transaction"
  };


const getAllTransactions = async (data) => {
    // console.log(process.env.PAYSTACK_TEST_SECRET_KEY, "from services")

    try{

    
          
        options.method = "GET"
        options.url = "https://api.paystack.co/transaction"
        
         const result = await axios(options);
          
        return result.data;
    }catch(err){
        return {
            status:false,
            message:"couldn't get transactions",
            data:null

        }
    }
    
}

const innitiateTranz = async (data) => {
    try{
        let datas = {
            email:data.email,
            amount:data.amount,
            currency:"NGN",
            callback_url:data.callback_url,
        }
          
        options.method = "POST"
        options.data = datas
        options.url = "https://api.paystack.co/transaction/initialize"
        const result = await axios(options);
          
        return result.data;
    }catch(err){
        return {
            status:false,
            message:"couldn't innitialize transactions",
            data:null

        }
    }
}

const verifyTranz = async (data) => {
    try{
        
          
        options.method = "GET"
       
        options.url = "https://api.paystack.co/transaction/verify/"+data.trId
        const result = await axios(options);
          
        return result.data;
    }catch(err){
        return {
            status:false,
            message:"couldn't innitialize transactions",
            data:null

        }
    }
}

module.exports = {
    getAllTransactions,
    innitiateTranz,
    verifyTranz

}




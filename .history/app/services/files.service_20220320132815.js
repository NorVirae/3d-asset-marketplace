const axios = require("axios");

require("dotenv").config();


const uploadFile = async (data) => {
    // console.log(process.env.PAYSTACK_TEST_SECRET_KEY, "from services")

    try{
        
    }catch(err){
        return {
            status:false,
            message:"couldn't get transactions",
            data:null

        }
    }
    
}

const deleteFile = async (data) => {
    try{
        
      
    }catch(err){
      
    }
}


module.exports = {
    getAllTransactions,
    innitiateTranz,
    verifyTranz

}




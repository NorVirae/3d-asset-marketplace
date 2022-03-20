const { getAllTransactions, innitiateTranz, verifyTranz } = require('../services/payment.service');
const md5 = require('md5')
const fs = require("fs")
const path = require('path')
require("dotenv").config();

const fileServ = require("../services/files.service")

const uploadFile = async (req, res) => {
    const uploadDir = path.join(__dirname, "..","/uploads/")
    console.log(req.query)
    const {name, size, currentChunkIndex, totalChunks} = req.query
    try{
        let ext = name.split(".").pop()
        console.log(ext)
        const data = req.body.toString().split(',')[1]
        const buffer = new Buffer(data, "base64") 
        const tmpFName 
        const tempFileName = uploadDir+"tmp_"+md5(name+req.ip) +"."+ext
        console.log(tempFileName)
        const firstChunk = currentChunkIndex == 0
        const finalChunk = currentChunkIndex == totalChunks - 1
        if (firstChunk && fs.existsSync(tempFileName)){
            fs.unlinkSync(tempFileName)
        }
        fs.appendFileSync(tempFileName, buffer)


        if(finalChunk){
            const finalName = uploadDir+"file_"+md5(Date.now()+name) +"."+ext
            fs.renameSync(tempFileName, finalName)
            res.status(200).json({finalFileName:finalName})
        }
        
        else{
            res.status(200).json("OK");

        }
    }catch(err){
        console.log(err)
        res.status(401).json({
            message:"error fetch data"
        })
    }
}

const deleteFile = async (req, res) =>{
    console.log(req.body)
    try{
        const result = await fileServ.deleteFile(req.body);
        console.log(result, "HErE");
        res.status(200).json(result);
    }catch(err){
        res.status(401).json({
            message:"error fetch data"
        })
    }
}



module.exports = {
    deleteFile,
    uploadFile,
}
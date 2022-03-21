const { getAllTransactions, innitiateTranz, verifyTranz } = require('../services/payment.service');
const md5 = require('md5')
const fs = require("fs")
const User = require("../models/users.model")
const path = require('path')
require("dotenv").config();

const fileServ = require("../services/files.service");
const User = require('../models/users.model');
const { findOneAndUpdate } = require('../models/users.model');

const uploadFile = async (req, res) => {
    const uploadDir = path.join(__dirname, "..","/uploads/")
    console.log(req.query)
    const {name, size, currentChunkIndex, totalChunks} = req.query
    const tmpFName = "tmp_"+md5(name+req.ip) +"."+ext
    const tempFileName = uploadDir+tmpFName
    try{
        if (currentChunkIndex === totalChunks) return
        let ext = name.split(".").pop()
        console.log(ext)
        const data = req.body.toString().split(',')[1]
        console.log(data, currentChunkIndex)
        const buffer = new Buffer(data, "base64") 
        
        console.log(tempFileName)
        const firstChunk = currentChunkIndex == 0
        const finalChunk = currentChunkIndex == totalChunks - 1
        if (firstChunk && fs.existsSync(tempFileName)){
            fs.unlinkSync(tempFileName)
        }
        fs.appendFileSync(tempFileName, buffer)


        if(finalChunk){
            const getFormerStorage = await User.findOne({})
            const user = await User.findOneAndUpdate({_id:id})
            let fName = "file_"+md5(Date.now()+name) +"."+ext
            const finalName = uploadDir + fName
            fs.renameSync(tempFileName, finalName)
            res.status(200).json({finalFileName:fName})
        }
        
        else{
            
            res.status(200).json("OK");

        }
    }catch(err){
        console.log(err)
        if (firstChunk && fs.existsSync(tempFileName)){
            fs.unlinkSync(tempFileName)
        }
        
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
        res.status(200).json("HOHA");
    }catch(err){
        res.status(401).json({
            message:"error fetch data"
        })
    }
}

const  buyStorage = async (req, res) =>{
    console.log(req.body)
    try{
        if (!req.body.spaceToBuy) throw new Error("Specify space!")

        const user = await User.findOne({
            _id:req.body.id
        })

        const updateUser = await User.findOneAndUpdate({
            _id:req.body.id
        },{storage:user.storage + req.body.spaceToBuy, totalAccumulatedStorage:user.totalAccumulatedStorage + req.body.spaceToBuy}, {new:true})

        res.status(200).json({
            message:"Purchase Successful",
            data:updateUser
        })
    }catch(err){
        res.status(401).json({
            message:"error buying storage"
        })
    }
}



module.exports = {
    deleteFile,
    uploadFile,
    buyStorage
}

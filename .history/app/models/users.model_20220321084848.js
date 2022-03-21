const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email:{type:String, unique:true},
    password:{type:String},
    storage:{type:Number, default:51200},
    totalAccu

})

module.exports = mongoose.model("User", userSchema);
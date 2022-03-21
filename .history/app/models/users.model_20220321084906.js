const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email:{type:String, unique:true},
    password:{type:String},
    storage:{type:Number, default:51200},
    totalAccumulatedStorage:{type:Number, default:50}

})

module.exports = mongoose.model("User", userSchema);
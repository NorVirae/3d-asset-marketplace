const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email:{type:String},
    password:{type:String},
    storage:{type:Number},

})


const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email:{type:String},
    password:{type:String},
    storage:{type:Number, default:104},

})

module.exports = mongoose.model(user, userSchema);
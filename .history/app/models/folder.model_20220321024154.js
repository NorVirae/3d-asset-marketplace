const mongoose = require('mongoose');


const folderSchema = new mongoose.Schema({
    
    email:{type:String},
    password:{type:String},
    storage:{type:Number},

})

module.exports = mongoose.model(user, userSchema);
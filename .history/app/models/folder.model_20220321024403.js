const mongoose = require('mongoose');


const folderSchema = new mongoose.Schema({
    
    name:{type:String},
    parent:{type:String},
    storage:{type:Number},

})

module.exports = mongoose.model(user, folderSchema);
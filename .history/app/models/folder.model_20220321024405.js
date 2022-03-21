const mongoose = require('mongoose');


const folderSchema = new mongoose.Schema({
    
    name:{type:String},
    parent:{type:String},

})

module.exports = mongoose.model(user, folderSchema);
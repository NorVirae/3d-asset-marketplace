const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    
    filename:{type:String},
    fileSize:{type:String},
    fileLocation:{type:String},
    parent:{type:String},

})

module.exports = mongoose.model(user, fileSchema);
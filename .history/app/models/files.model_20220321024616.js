const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    
    filename:{type:String},
    filesize:{type:String},
    fileLo
    parent:{type:String},

})

module.exports = mongoose.model(user, fileSchema);
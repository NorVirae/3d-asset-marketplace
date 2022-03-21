const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    
    name:{type:String},
    parent:{type:String},

})

module.exports = mongoose.model(user, folderSchema);
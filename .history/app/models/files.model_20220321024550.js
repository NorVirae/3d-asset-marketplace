const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    
    filename:{type:String},
    fileZ
    parent:{type:String},

})

module.exports = mongoose.model(user, fileSchema);
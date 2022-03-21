const mongoose = require('mongoose');


const fileSchema = new mongoose.Schema({
    
    filename:{type:String},
    file
    parent:{type:String},

})

module.exports = mongoose.model(user, fileSchema);
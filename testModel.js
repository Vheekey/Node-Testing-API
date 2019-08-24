//all that is db

var mongoose = require("mongoose"); //initialise mongoose


//setup schema for db
var tableSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    date_created: {
        type: Date,
        default: Date.now
    }
});



//export the model
var info = module.exports = mongoose.model("contact", tableSchema);
module.exports.get = function(callback,limit){
    info.find(callback).limit(limit);
}

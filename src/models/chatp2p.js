const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Chatp2pSchema = new Schema({
    name:{type:String, required:true, unique:true},
    color:{type:String, required:true, unique:true},
    icon: {type:String, required:true, unique:true},
    message: {type:String, required:true},
    date_create: { type: Date, default: Date.now },
    sent: {type:String, required:true},
})

module.exports = mongoose.model('Users', Chatp2pSchema);
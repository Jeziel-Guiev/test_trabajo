const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name:{type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    created_at: { type: Date, default: Date.now },
    password_mqtt: {type:String, required:true},
})

module.exports = mongoose.model('Users', UsersSchema);
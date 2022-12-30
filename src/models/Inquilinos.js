const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InquilinoSchema = new Schema({
    name:{type:String, required:true, unique:true},
    email: {type:String, required:true, unique:true},
    pasport:{type:String},
    room:{type:Number},
    phone:{type:String},
    contract:{type:String},
    target_rfid:{type:String},
    pay_cash:{type:Number},
    state:{type:Number},
    password: {type:String, required:true},
    created_at: { type: Date, default: Date.now },
    password_mqtt: {type:String, required:true},
    access_control_door :{type:Array, default:[]},
    mqttConfig:{type:JSON}
})

module.exports = mongoose.model('Inquilinos', InquilinoSchema);
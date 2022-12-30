const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TempHum = new Schema({
    tmp:{type:String},
    hum:{type:String},
    date_create: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Temphum', TempHum);
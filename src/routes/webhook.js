const express = require('express');
const modelInquilino = require('../models/Inquilinos.js');
const temphum = require('../models/temphum.js');
const routes =express.Router();
var mqtt = require('mqtt');


var client;

function startMqttClient(){

    const options = {
        port: 1883,
        host: '143.198.153.138',
        clientId: 'webhook_superuser' + Math.round(Math.random() * (0 - 10000) * -1),
        username: 'superuser',
        password: 'superuser',
        keepalive: 60,
        reconnectPeriod: 5000,
        protocolId: 'MQIsdp',
        protocolVersion: 3,
        clean: true,
        encoding: 'utf8'
    }

    client = mqtt.connect ('mqtt://' + 'localhost', options);

    client.on('connect', function () {
        console.log("MQTT CONNECTION -> SUCCESS;");
  
    });

    client.on('reconnect', (error) => {
        console.log('RECONNECTING MQTT');
        console.log(error)
    });

    client.on('error', (error) => {
        console.log("MQTT CONNECIONT FAIL -> ");
        console.log(error)
    });

    client.emit();


}
function sendMqttNotif(notif){
    const topic = '/uneria23/number';
    const msg = 'alue';
    client.publish(topic, msg);
}

routes.post('/saver-webhook',(req,res) =>{
    console.log(req.body)
    sendMqttNotif();
    res.json({})
});

routes.post('/rfid-register-control', async (req,res) =>{
try {
    console.log(JSON.parse(req.body.payload))
    const value = new temphum({
        tmp : ((JSON.parse(req.body.payload).tmp)),
        hum : ((JSON.parse(req.body.payload).hum))
    });
    await value.save();
    res.json()

        
} catch (error) {
    res.json({err:"error al guardar informacion"})
}
});

routes.get('/get-list-temphum', async (req,res) =>{
    try {
 
      
        const data = await temphum.find({},{_id:0})
        res.json(data)
    
            
    } catch (error) {
        res.json({err:"error al traer lista de datos"})
    }
    });


//module.exports = routes;


//////////////// chat MQTT 

routes.post('/message-save',(req,res) =>{
    
   console.log(JSON.parse(req.body.payload))
    res.json({})
});
routes.post('/messages-getbyid',(req,res) =>{
    
   
    res.json({})
});


setTimeout(() => {
    startMqttClient();
}, 3000);
module.exports = routes;

// const nuevo_acces_contro = new modelInquilino({
//     "created_at" : new Date(),
//     "name" : "JOSUE JIMENEZ",
//     email: "nodeserver.iot@gmail.com",
//     password:"123456",
//     target_rfid:"1057918489",
//     "pasport" : "9392891 CBBA",
//     "room" : 13,
//     "phone" : "77981674",
//     "contract" : "Alquiler",
//     "state" : 1,
//     password_mqtt:"123123123",
//     "pago" : 350,
//     mqttConfig: {
//         uih: "4x232Za3Bv",
//         uid: "23Jdh24",
//         username: "userA1",
//         password: "usertest",
//         mqttPublish: {
//           chatp2p: "4x232Za3Bv/3Ms23Xr/chatp2p",
//         },
//         mqttSubscribe: {
//           chatp2p: "4x232Za3Bv/23Jdh24/chatp2p",
//           all: "4x232Za3Bv/23Jdh24",
//           caudalAgua: "4x232Za3Bv/23Jdh24/Ged232/caudalAgua",
//         },
//       },
// });
// nuevo_acces_contro.save()
// res.json(nuevo_acces_contro)
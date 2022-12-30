const express = require('express');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors   =require('cors');
const app = express();


const configcors={
    origin:'*'
}


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(configcors));
app.use(morgan('dev'))
app.use(routes);

module.exports=app;
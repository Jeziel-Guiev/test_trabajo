const express = require('express');
const controller_login = require('../controllers/login.js');
const routes =express.Router();


routes.post('/signin-user',controller_login.signin);
routes.post('/signup-user',controller_login.signup);

//module.exports = routes;
module.exports = routes;


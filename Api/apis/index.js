const express = require('express');
const apiRoute = express.Router();


const loginRoute=require('./login/login.js');





apiRoute.use('/loginApi', loginRoute);




module.exports=apiRoute
const express = require('express');
const apiRoute = express.Router();


const loginRoute=require('./login/login.js');





apiRoute.use('/item', loginRoute);




module.exports=apiRoute
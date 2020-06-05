const express = require('express');
const apiRoute = express.Router();


const loginRoute=require('./login/login.js');
const timesheetRoute=require('./Timesheet/timesheet.js')





apiRoute.use('/loginApi', loginRoute);
apiRoute.use('/timesheetApi', timesheetRoute);



module.exports=apiRoute
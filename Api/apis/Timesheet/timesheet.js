//this API is used for order

const express = require ('express');
const timesheetRoute = express.Router();

const config =require('../../config')
const knex = require('knex')(config.getDbDetails);




timesheetRoute.get('/',(req,res)=>{
    res.json("timesheet Api is work properly");
});



timesheetRoute.post('/postData', function(req, res) {


    knex.transaction(trx => {
        trx.insert(req.body).returning('*').into('timesheet').then(function(data) {
            res.json(data);
        })
        .then(trx.commit)
        .catch(trx.rollback)
    });

});




timesheetRoute.get('/allData', function(req, res) {
    knex.select('*').from('timesheet').then(function(data) {
        res.json(data);
    });
});






timesheetRoute.get('/allDetails/:id', function(req, res) {

   
});



timesheetRoute.get('/data/:id', function(req, res) {

    knex.select('*').from('login').where('uuid', '=', req.params.id).then(function(data) {
        res.json(data);
    });
   

});



timesheetRoute.post('/update/:id', function(req,res) {

    
});


timesheetRoute.post('/delete/:orderId', function(req, res) {

   
});



module.exports = timesheetRoute;



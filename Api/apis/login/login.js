//this API is used for order

const express = require ('express');
const ordersRoute = express.Router();

const config =require('../../config')
const knex = require('knex')(config.getDbDetails);




ordersRoute.get('/',(req,res)=>{
    res.json("Order Api is work properly");
});


ordersRoute.post('/', function(req, res) {


});


ordersRoute.get('/allData', function(req, res) {
    

});



ordersRoute.get('/allDetails', function(req, res) {

   
});



ordersRoute.get('/allDetails/:id', function(req, res) {

   
});



ordersRoute.get('/data/:id', function(req, res) {
   

});



ordersRoute.post('/update/:id', function(req,res) {

    
});


ordersRoute.post('/delete/:orderId', function(req, res) {

   
});



module.exports = loginRoute;



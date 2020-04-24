//this API is used for order

const express = require ('express');
const loginRoute = express.Router();

const config =require('../../config')
const knex = require('knex')(config.getDbDetails);




loginRoute.get('/',(req,res)=>{
    res.json("Order Api is work properly");
});


loginRoute.post('/login', function(req, res) {

    const { username, password }= req.body;

    console.log(req.body)

    knex.raw(`select * from login where username='${req.body.username}' and password='${req.body.password}';`).then(data=>{
        res.json(data.rows)
        console.log("yes")
    })

});




loginRoute.get('/allData', function(req, res) {
    

});



loginRoute.get('/allDetails', function(req, res) {

   
});



loginRoute.get('/allDetails/:id', function(req, res) {

   
});



loginRoute.get('/data/:id', function(req, res) {
   

});



loginRoute.post('/update/:id', function(req,res) {

    
});


loginRoute.post('/delete/:orderId', function(req, res) {

   
});



module.exports = loginRoute;



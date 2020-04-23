//this API is used for order

const express = require ('express');
const ordersRoute = express.Router();

const config =require('../../config')
const knex = require('knex')(config.getDbDetails);




ordersRoute.get('/',(req,res)=>{
    res.json("Order Api is work properly");
});


ordersRoute.post('/', function(req, res) {


    const { orderid, orderno, customerid, pmethod, gtotal }=req.body;

    


    knex.transaction(trx => {
        trx.insert(req.body).returning('*').into('orders').then(function(data) {
            res.json(data);
        })
        .then(trx.commit)
        .catch(trx.rollback)
    });

});


ordersRoute.get('/allData', function(req, res) {
    knex.select('*').from('orders').then(function(data) {
        res.json(data);
    });
});



ordersRoute.get('/allDetails', function(req, res) {

    knex.raw(`select * from orders, customer where orders.customerid = customer.customerid;`).then(data=>{
        res.json(data.rows)
        console.log("yes")
    })
});



ordersRoute.get('/allDetails/:id', function(req, res) {

    knex.raw(`select * from orders, customer where orders.customerid = customer.customerid and orders.orderid='${req.params.id}';`).then(data=>{
        res.json(data.rows)
        console.log("yes")
    })
});



ordersRoute.get('/data/:id', function(req, res) {
    knex.select('*').from('orders').where('orderid', '=', req.params.id).then(function(data) {
        res.json(data);
    });
});



ordersRoute.post('/update/:id', function(req,res) {

    const { orderid, orderno, customerid, pmethod, gtotal }=req.body;

    knex.transaction(trx=>{

        trx.update({
            'orderno': orderno,
            'customerid': customerid,
            'pmethod': pmethod,
            'gtotal': gtotal

        }).where('orderid', '=', req.params.id).into('orders').returning('*').then(data=>{
            res.json(data);
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
});


ordersRoute.post('/delete/:orderId', function(req, res) {

    const { orderid } =req.body;

    knex.raw(`delete from orders where orderid='${req.params.orderId}';`)
    .then(function(data) {
        
        res.json({messages: "record is delete successfully"})
    });
});



module.exports = ordersRoute;



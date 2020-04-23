const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require ('./config')
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

const knex = require('knex')(config.getDbDetails);
const apiRoute = require('./apis/index')



app.get('/', (req,res)=>{
    res.json("code is working properly");
})

app.use('/api', apiRoute);



app.listen(PORT,()=>{
    console.log("App is running on " + PORT)
})
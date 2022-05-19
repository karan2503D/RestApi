const express = require('express');
const app = express();
const mongodb = require('mongoose');
mongodb.connect("mongodb://localhost:27017/ECOM");

// user Routes
const user_routes = require('./routes/userRoute');

app.use('/api',user_routes);

app.listen(8000,function(){
    console.log("Running on Server 8000")
})
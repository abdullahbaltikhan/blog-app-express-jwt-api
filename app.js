import  express  from 'express';
// var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const PORT = process.env.PORT || 5000;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();

// mongodb atlas connect
var mongoose = require('mongoose');
//Set up default mongoose connection
var mongoDB = process.env.DATABAS;
mongoose.connect(mongoDB, { useNewUrlParser: true })
.then(()=>{
    console.log("db connected")
})
.catch((error) =>{
    console.log(error)
})


import user from './model/user';


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/test', indexRouter);
app.use('/blog', indexRouter);
app.use('/users', usersRouter);
// app.use('/', usersRouter);


app.listen(5000, () => {
    console.log('Server is listenin on PORT :' + PORT);
})



module.exports = app;




// export default app;
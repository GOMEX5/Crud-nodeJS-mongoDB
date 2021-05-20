const path = require('path');
const morgan = require('morgan');
const express = require('express');
const app = express();

//importing routers
const router = require('./routers/index');

//setting
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//routers
app.use('/',router);

//static files
app.use(express.static(path.join(__dirname,'public')));

module.exports = app;
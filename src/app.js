const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// CONECTING TO DB
mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Db connected'))
    .catch(err => console.log(err))

// IMPORTING ROUTES
const indexRoutes = require('./routes/index')

// SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// ROUTES
app.use('/', indexRoutes);
app.use(express.static(__dirname + '/public'));

// STARTING SERVER
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


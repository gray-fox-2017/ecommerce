const express =require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ecommerce');

const index = require('./routes/index');
var item = require('./routes/item');
var customer = require('./routes/customer');
var cart = require('./routes/cart')

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/api/item', item);
app.use('/api/customer', customer);
app.use('/api/cart', cart);

app.listen(3000);

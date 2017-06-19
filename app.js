const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const items = require('./routes/items');
const customers = require('./routes/customers');
const transactions = require('./routes/transactions');
const cors = require('cors');

app.set('port',process.env.PORT || 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

app.use('/api/items',items)
app.use('/api/customers',customers)
app.use('/api/transactions',transactions)


app.listen(app.get('port'),()=>{
  console.log('server udah jalan cuy!');
})
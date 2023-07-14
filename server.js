var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var http=require('http')
var app = express()
const mongoose = require('mongoose')
const bcrypt = require("bcrypt");
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use('/public', express.static('public'));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGOCONNECTION, { useNewUrlParser: true });


app.listen(process.env.PORT, () => {
    console.log("App listening on port " + process.env.PORT);
})
  app.use(bodyParser.urlencoded({ extended: false })) 
  app.use(bodyParser.json()) 
var Users = require('./routes/Users')
var Tickets = require('./routes/Tickets')

app.use('/users', Users)
app.use('/tickets', Tickets)



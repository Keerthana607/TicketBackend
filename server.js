var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var http=require('http')
var app = express()
const mongoose = require('mongoose')

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use('/public', express.static('public'));
const mySecret = process.env['mongoUrl']
 //Database 
const intialDbConnection = async () => {
  try {
    await mongoose.connect(mySecret, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("db connected")
    
  }
  catch (error) {
    console.error(error);
  }
}
  app.use(bodyParser.urlencoded({ extended: false })) 
  app.use(bodyParser.json()) 
var Users = require('./routes/Users')
var Tickets = require('./routes/Tickets')

app.use('/users', Users)
app.use('/tickets', Tickets)

var server=app.listen(port, function() {
  var host=server.address().address;
  console.log('Server is running on port: ' + host,port)
})

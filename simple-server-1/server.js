//@ts-check
var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');
const axios = require('axios').default;

require('dotenv').config() 
const { PORT, SERVER_2_URL, SERVER_2_PORT, SERVER_3_URL, SERVER_3_PORT } = process.env
if (!PORT) {
  console.error('!!!PORT IS UNDEFINED!!!')
  process.exit()
}


//hero routes
var app = express();

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

//initialise express router
var router = express.Router();

// call the database connectivity function

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

// Error handling
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
     res.setHeader("Access-Control-Allow-Credentials", "true");
     res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
     res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
   next();
 });

// use express router
// app.use('/api',router);

app.post("/check", (req, res) => {
  res.json({
    message: 'ok'
  })
})
app.listen(PORT, (req, res) => {
    console.log(`Product server is running on ${PORT} port.`);
})
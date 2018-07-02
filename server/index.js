require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const {router} = require('./router');
const cors = require('cors');
const app = express();


const PORT = 3000;

// require('../Gruntfile.js');
app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));


// SQL DB
require('../db/sql');

// mongoDB
// require('../db/mongoDB');

// Static
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routers
app.use('/api', router);


// Start up server
app.listen(PORT, (err) => {
  if(err) console.log('Err connecting to server: ', err);
  else console.log('Successfully connected to server on port: ', PORT);
})
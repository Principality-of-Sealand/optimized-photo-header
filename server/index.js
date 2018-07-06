require('newrelic');
const express = require('express');
const parser = require('body-parser');
const path = require('path');
const {router} = require('./router');
const cors = require('cors');
const app = express();


const PORT = 3000;
const corsOptions = {
  origin: 'http://ec2-54-86-116-225.compute-1.amazonaws.com',
  optionSuccessStatus: 200
}

// require('../Gruntfile.js');
app.use(cors(corsOptions));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));


// SQL DB
require('../db/sql');

// mongoDB
// require('../db/mongoDB');

// Static
app.use(express.static(path.join(__dirname, '../client/dist')));


//LOADER.IO
app.get('/loaderio-3e6d4a01d9ac5d2fcabf22afbb47b0c4/', (req, res) => {
  res.status(200).send('loaderio-3e6d4a01d9ac5d2fcabf22afbb47b0c4');
});

// Routers
app.use('/api', router);



// Start up server
app.listen(PORT, (err) => {
  if(err) console.log('Err connecting to server: ', err);
  else console.log('Successfully connected to server on port: ', PORT);
})
//========== CREATE DATABASE USING POSGRES FOR NODE.JS ==========
const { Client } = require('pg');
const db = new Client({
  host: 'localhost',
  port: '5432',
  database: 'yelp',
  user: 'arthurmoore',
  password: ''
});

//========== ESTABLISH CONNECTION TO A DATABASE ==========

db.connect()
  .then(() => {
    //========== POPULATE DATABASE ON CONNECTION (ONCE, THEN COMMENT OUT) ==========
    // console.log('we have connected to an optimized database' + new Date());
    // db.query(`COPY restaurants(name,address,phone_number,url,google_map,categories) FROM '/Users/arthurmoore/GitHub/Sealand-Welp-optimized-photo-header/db/sql/tenmillion.csv' delimiter '\t' CSV`)
    // .then(() => {
    //   console.log('we have successfully added 10 million at \n' + new Date() + '\n');
    // })
    // .catch(err => console.log('we had error while inserting data on connection \n', err));
    //==================== 
  })
  .catch(err => {
    console.log('There was an error connecting to a database', err)
  });

module.exports = {
  db
}


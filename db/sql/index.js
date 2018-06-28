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
    let start = new Date();
    console.log('we have connected to an optimized database' + start);
    // db.query(`COPY restaurants(name,address,phone_number,url,google_map,categories) FROM '/Users/arthurmoore/GitHub/Sealand-Welp-optimized-photo-header/db/data/forSury.csv' delimiter '\t' CSV`)
    // // // db.query(`COPY photos(url, date_posted) FROM '/Users/arthurmoore/GitHub/Sealand-Welp-optimized-photo-header/db/data/10Mphotos.csv' delimiter '\t' CSV`)
    // // db.query(`COPY rest_photos(rest_id, photo_id) FROM '/Users/arthurmoore/GitHub/Sealand-Welp-optimized-photo-header/db/data/10Mrelations.csv' delimiter '\t' CSV`)
    // .then(() => {
    //   console.log('we have successfully added 10 million in ' + (start.getTime() - new Date().getTime()) + ' miliseconds \n');
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


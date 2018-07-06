//========== CREATE DATABASE USING POSGRES FOR NODE.JS ==========
const { Pool } = require('pg');
const db = new Pool({
  user: 'postgres',
  host: '54.86.116.225',
  database: 'yelp',
  password: 'docker'
});

//========== ESTABLISH CONNECTION TO A DATABASE ==========

db.connect()
  .then(() => {
    //========== POPULATE DATABASE ON CONNECTION (ONCE, THEN COMMENT OUT) ==========
    let start = new Date();
    console.log('we have connected to an optimized database' + start);

    //========== POPULATE RESTAURANTS ===========
    // db.query(`COPY restaurants(name,address,phone_number,url,google_map,categories) FROM '/Users/arthurmoore/GitHub/Sealand-Welp-optimized-photo-header/db/sql/data/restaurants.csv' delimiter '\t' CSV`)
    
    //========== POPULATE PHOTOS ===========
    // db.query(`COPY photos(url, date_posted) FROM '/Users/arthurmoore/GitHub/Sealand-Welp-optimized-photo-header/db/sql/data/photos.csv' delimiter '\t' CSV`)
    
    //========== POPULATE USERS ===========
    // db.query(`COPY users(username, profile_pic) FROM '/Users/arthurmoore/GitHub/Sealand-Welp-optimized-photo-header/db/sql/data/users.csv' delimiter '\t' CSV`)
    
    //========== POPULATE RELATIONS ===========
    // db.query(`COPY rest_photos(rest_id, user_id, photo_id) FROM '/Users/arthurmoore/GitHub/Sealand-Welp-optimized-photo-header/db/sql/data/relations.csv' delimiter '\t' CSV`)
    
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
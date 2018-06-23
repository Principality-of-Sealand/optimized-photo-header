// const sequelize = require('sequelize');

// const user = 'arthurmoore';
// const pass = '';
// const host = 'localhost';


// const db = new sequelize('yelp', user, pass, {
//   host: host,
//   dialect: 'postgres'
// })

const { Client } = require('pg');
const db = new Client({
  host: 'localhost',
  port: '5432',
  database: 'yelp',
  user: 'arthurmoore',
  password: ''
});

db.connect()
  .then(() => {
    console.log('we have connected to an optimized database' + new Date())
    // db.query(`COPY restaurants(name,address,phone_number,url,google_map,categories) FROM '/Users/arthurmoore/GitHub/Sealand-Welp-optimized-photo-header/db/sql/tenmillion.csv' delimiter '\t' CSV`)
    // .then(() => {
    //   console.log('we have successfully added 10 million at \n' + new Date() + '\n');
    // })
    // .catch(err => console.log('we had error while inserting data on connection \n', err));
  })
  .catch(err => {
    console.log('There was an error connecting to a database', err)
  });

//==============> populate reviews in db <=====================

// let pop = []
// for (let i = 1; i < 10000000; i++) {
//   pop.push(i)
// }
// pop.forEach(number => populateReviews(number));

// dbReviews.once(‘open’, () => {
//   console.log(‘we have successfully connected to database’);
// });

//=============================================================

// db.authenticate()
// .then(() => {
//   console.log('Database has been established successfully');
//   const schema = require('./sql/schema'); //create tables

//   // ========
//   let pop = []
//   for (let i = 1; i < 10000000; i++) {
//     pop.push(i)
//   }
//   pop.forEach(number => populateReviews(number));
//   // ========
// })
// .catch(err => {
//   console.log('Unable to connect to database: ', err);
// })

module.exports = {
  db
}


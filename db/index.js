const sequelize = require('sequelize');

const user = 'arthurmoore';
const pass = '';
const host = 'localhost';


const db = new sequelize('yelp', user, pass, {
  host: host,
  dialect: 'postgres'
})

db.authenticate()
.then(() => {
  console.log('Database has been established successfully');
  const schema = require('./sql/schema'); //create tables
})
.catch(err => {
  console.log('Unable to connect to database: ', err);
})

module.exports = {
  db
}


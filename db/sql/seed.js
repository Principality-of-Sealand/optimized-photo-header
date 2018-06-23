// const data = require('./schema/data.js');
const { db } = require('../');

const users = () => {
  db.queryInterface.bulkInsert('users', data.usersData)
    .then(() => {
      console.log('Successfully bulk inserted users');
    })
    .catch((err) => {
      console.log('Error inserting into users table: ', err);
    })
};
const restaurants = () => {
  db.queryInterface.bulkInsert('restaurants', data.restaurantsData)
    .then(() => {
      console.log('Successfully bulk inserted restaurants');
    })
    .catch((err) => {
      console.log('Err inserting into restaurants table: ', err);
    })
}
const photos = () => {
  db.queryInterface.bulkInsert('photos', data.photosData)
    .then(() => {
      console.log('Successfully bulk inserted photos');
    })
    .catch((err) => {
      console.log('Err inserting into photos table: ', err);
    })
}

const userRest = () => {
  db.queryInterface.bulkInsert('user_restaurants', data.users_restaurants)
    .then(() => {
      console.log('Successfully bulk insert ed user_restaurants')
    })
    .catch(err => {
      console.log('Err inserting into users_restaurants table: ', err);
    })
}
users();
restaurants();
photos();
userRest();

module.exports = {
  users
}
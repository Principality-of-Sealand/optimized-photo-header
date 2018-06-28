const { db } = require('../../../../db/sql');
// const {user, photo, restaurant} = require('../sql/schema');
const fetchRest = (id, cb) => {
  restaurant.findAll({
    where: {
      id: id
    }
  })
  .then((data) => {
    query = data[0].dataValues;
    cb(query);
  })
  .catch(err => {
    console.log('Err in fetchRest: ', err);
  })
}
module.exports = {
  fetchRest,
}
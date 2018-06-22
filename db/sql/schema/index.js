const Sequelize = require('sequelize');
const { db } = require('../../');


const user = db.define('user', {
  name: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, { timestamps: false });

const photo = db.define('photo', {
  url: {
    type: Sequelize.STRING(250),
    allowNull: true
  },
  comment: {
    type: Sequelize.STRING(50),
    allowNull: true
  }
}, { timestamps: false });

const restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING(250),
    allowNull: false
  },
  address: {
    type: Sequelize.STRING(250),
    allowNull: false
  },
  phone_number: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  url: {
    type: Sequelize.STRING(250),
    allowNull: false
  },
  google_map: {
    type: Sequelize.STRING(2500),
    allowNull: false
  },
  categories: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
}, { timestamps: false });

const user_restaurant = db.define('user_restaurant', {}, { timestamps: false });

user.hasMany(photo);
photo.belongsTo(user);

restaurant.hasMany(photo);
photo.belongsTo(restaurant);

user.hasOne(user_restaurant);
user_restaurant.belongsTo(user);
restaurant.hasOne(user_restaurant);
user_restaurant.belongsTo(restaurant);

db.sync({ force: false})
  .then(() => {
    console.log('Successfully synced database')
    require('../seed.js'); //bulk insert data after done syncing
  })
  .catch(err => {
    console.log('Error syncing database: ', err);
  })
  
module.exports = {
  user,
  photo,
  restaurant,
}

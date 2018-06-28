// const mongo = require('mongodb').MongoClient;

// mongo.connect('mongodb://localhost:27017', (err, client) => {
//   if (err) console.log('There was an error connecting to a MongoDB', err);
//   const db = client.db('yelp');
//   const restaurants = db.collection('restaurants');
//   restaurants.insertOne({name: 'stocky 2'})
  
//   // db.createCollection('places');
//   // db.collection('skuba');
//   // db.restaurants.impo
//   // db.sury.insertOne({name: 'Sury'});

//   // yelp.createCollection('restaurants');
//   // yelp.skuba.insertOne({name: 'Jacob'});
// })
const mongo = require('mongodb');
const db = new Mongo.getDB('yelp').connect('localhost:27017/yelp');

console.log('here are our list of restaurants', db.getCollectionNames());

module.exports = db;

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/kiki');

// let db = mongoose.connection;

// db.on('error', console.log('Houston, we have a db connection problem ', error));
// db.once('open', () => console.log('We are connected to a database!'));


const router = require('express').Router();
const helper = require('./controllers/PostgreSQL/helper/index.js');

router.route('/fetchRestaurant/:id')
  .get((req, res) => {
    console.log('GET request for /fetchRestaurant');
    console.log(req.params.id);
    helper.fetchRest(req.params.id, (data) => {
      address = data.address.split(', ');
      categories = data.categories.split(' ');
      data.address = address;
      data.categories = categories;
      res.status(200).send(data);
    });
  });

router.route('/fetchUserID')
  .get((req, res) => {
    console.log('GET request for /fetchUserID');
    res.status(200).send('');
  });

router.route('/fetchPhoto')
  .get((req, res) => {
    console.log('GET request for /fetchPhoto');
    res.status(200).send('');
  });

  // write post

  // write put

  // write update

module.exports = {
  router : router
}

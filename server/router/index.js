const router = require('express').Router();
const restCtrl = require('../controllers/PostgreSQL/restController.js');
const photoCtrl = require('../controllers/PostgreSQL/photoController.js');

router.route('/fetchRestaurant')
  .get(restCtrl.fetchAll);
router.route('/fetchRestaurant/:id')
  .get(restCtrl.fetchOne);
router.route('/fetchRestaurant/category/:category')
  .get(restCtrl.fetchAllByCategory);

router.get('/fetchPhoto/:id', photoCtrl.fetchPics);
router.get('/fetchPhoto/users/:id', photoCtrl.fetchPicsByUser);

  // write post

  // write put

  // write update

module.exports = {
  router : router
}

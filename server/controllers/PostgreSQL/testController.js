const { db } = require('../../../db/sql');

const fetchDataAndPics = (req, res) => {
  const id = [req.params.id];
  db.query("select name, address, phone_number, restaurants.url, google_map, categories, photos.url from rest_photos inner join restaurants on rest_photos.rest_id = restaurants.id inner join photos on rest_photos.photo_id = photos.id where rest_id = $1", id)
    .then((data) => {
      // let restInfo = {
      //   name: 
      // }
      // console.log('Fetching photos by restaurant...')
      res.status(200).send(data);
    })
    .catch(err => console.log('There was an error in retrieving photos of restaurant - ', err));
};


module.exports = { fetchDataAndPics };
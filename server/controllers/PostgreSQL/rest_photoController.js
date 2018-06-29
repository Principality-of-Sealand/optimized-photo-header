const { db } = require('../../../db/sql');

const fetchPics = (req, res) => {
  const id = [req.params.id];
  db.query('select url from rest_photos inner join photos on rest_photos.photo_id = photos.id and rest_id = $1', id)
    .then((data) => {
      console.log('Fetching photos...');
      res.status(200).send(data);
    })
    .catch(err => console.log('There was an error in retrieving photos of restaurant - ', err));
};

const fetchPicsByUser = (req, res) => {
  const id = [req.params.id];
  db.query('select url from rest_photos inner join users on rest_photos.user_id = users.id and user_id = $1', id)
    .then((data) => {
      console.log('Fetching photos...');
      res.status(200).send(data);
    })
    .catch(err => console.log('There was an error in retrieving photos by user - ', err));
};

module.exports = { fetchPics, fetchPicsByUser };
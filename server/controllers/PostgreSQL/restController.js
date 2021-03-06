const { db } = require('../../../db/sql');

const fetchAll = (req, res) => {
  // res.send('in controller')
  db.query('SELECT * FROM restaurants')
    .then((data) => {
      // console.log('Fetching all restaurants...');
      res.status(200)
        .send(data);
    })
    .catch(err => console.log('There was an error fetching all restaurants.')); 
};

const fetchOne = (req, res) => {
  const restID = [req.params.id];
  db.query('select * from restaurants where id = $1', restID)
  .then((data) => {
    // console.log('Fetching restaurant info...');
      res.status(200)
        .send(data);
    })
    .catch(err => console.log('Error in fetching single restaurant info'));
};

const fetchAllByCategory = (req, res) => {
  const category = [req.params.category];
  db.query('select * from restaurants where categories = $1', category)
  .then((data) => {
      // console.log('Fetching restaurants by category...');
      res.status(200)
        .send(data);
    })
    .catch(err => console.log('Error in fetching restaurants by category'));
};

module.exports = {
  fetchAll,
  fetchOne,
  fetchAllByCategory
}
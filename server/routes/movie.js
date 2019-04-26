const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

router.get('/', (req, res) => {
  Movie.find(req.query).then(data => res.json(data));
});

module.exports = router;
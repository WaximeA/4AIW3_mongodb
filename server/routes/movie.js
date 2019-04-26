const express = require('express');
const Movie = require('../models/movie');

const router = express.Router();

router.get('/', (req, res) => {
  Movie.find(req.query)
  .then(data => res.json(data))
  .catch(error => res.sendStatus(500));
});

router.post('/', (req, res) => {
  const movie = new Movie(req.body);
  movie.save()
  .then(data => res.status(201).json(data))
  .catch(error => {
    if (error.name = "ValidationError") {
      res.status(400).json(error)
    } else {
      res.status(500);
    }
    res.sendStatus(500);
  });
});

module.exports = router;
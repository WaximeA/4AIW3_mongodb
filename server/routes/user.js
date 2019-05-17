const express = require('express');
const createToken = require('../lib/auth').createToken;
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res) => {
  User.find(req.query)
  .then(data => res.json(data))
  .catch(error => res.sendStatus(500));
});

router.post('/register', (req, res) => {
  const user = new User(req.body);

  user.register()
  .then( data => {
    res.status(201).send(data);
  });
});

router.post('/login', (req, res) => {
  User.login(req.body.email, req.body.password).then( data => {
    const token = createToken({
      email: req.body.email,
      password: req.body.password
    })
    res.status(200).send(token);
  });
});

module.exports = router;
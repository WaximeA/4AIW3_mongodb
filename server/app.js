console.log('In app.js');

const db = require('./lib/db');
const User = require('./models/user');
const Movie = require('./models/movie');

// // *************** USER DATA **************
// db.once('open', () => {
//   const firstUser = new User({
//     firstName: 'Waxime',
//     lastName: 'Aveline',
//     email: 'waxime@aveline.fr',
//     rgpd_terms: true,
//     password: 'wax123',
//     createdAt: Date.now(),
//   });
//   // const secondUser = new User({
//   //   firstName: 'John',
//   //   lastName: 'Doe',
//   //   email: 'john@doe.fr',
//   //   rgpd_terms: true,
//   //   password: 'john123',
//   //   createdAt: Date.now(),
//   // });
//
//   // Save data
//   firstUser.register().then(data => {
//     console.log(data);
//     User.login(firstUser.email, firstUser.password).
//         then(user => console.log(user)).
//         catch(error => console.log(error));
//   })
//   .catch(error => console.log(error));
// });
//
//
// // *************** MOVIE DATA **************
// db.once('open', () => {
//   const firstMovie = new Movie({
//     title: 'Titanic',
//     createdAt: new Date('1998-01-01'),
//     year: 1997,
//     category: 'Drama'
//   });
//   const secondMovie = new Movie({
//     title: 'Toy Story 4',
//     createdAt: new Date('2019-05-01'),
//     year: 2019,
//     category: 'Animation'
//   });
//   const thirdMovie = new Movie({
//     title: 'Harry potter',
//     createdAt: new Date('2004-05-01'),
//     year: 2004,
//     category: 'SF'
//   });
//
//   // firstMovie.save().then(data => console.log(data.onScreen)).catch(error => console.log(error));
//   // secondMovie.save().then(data => console.log(data.onScreen)).catch(error => console.log(error));
//   // thirdMovie.save().then(data => console.log(data.onScreen)).catch(error => console.log(error));
//
// });
//
// db.on('error', (error) => console.log(error, 'Error'));

// *************** EXPRESS **************
const express = require('express');
const movieRouter = require('./routes/movie');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser);

app.use('/movies', movieRouter);

app.listen(3000, () => console.log('Listening'));
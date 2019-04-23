console.log('In app.js');

const mongoose = require('mongoose');

// HTTP connexion like to mongoose
mongoose.connect(`mongodb://mongo`, {
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASS,
  dbName: process.env.MONGODB_DBNAME,
  useNewUrlParser: true
});

// mongoose.connect(`mongodb://root:password@mongo/SampleCollections`, {useNewUrlParser:true});

const db = mongoose.connection;

db.once('open', () => console.log('Connected to mongoose'));
db.on('error', () => console.log('Error'));

// BDD Schama
const MovieSchema = mongoose.Schema({
  title: String,
  createdAt: Date,
  year: {
    type: Number,
    required: true,
    min: 1900
  },
  category: {
    type: String,
    enum: ['Horror', 'SF', 'Drama', 'Comedy', 'Animation']
  }
});

// Création d'une méthode lié au schéma qui vérifie si le film est à l'affiche
MovieSchema.methods.onScreen = function() {
  console.log(Date.now() > new Date (`${this.year}`))
}

// Listener avant le save
MovieSchema.pre('save', function(next) {
  console.log('Saving '+ this.title);
  console.log(this);
  next();
});

// Listener après le save
MovieSchema.post('save', function() {
  console.log(this.title + ' saved');
  console.log(this);
});

// Model collection
const Movie = mongoose.model('Movie', MovieSchema);

// Insert data
db.once('open', () => {
  const firstMovie = new Movie({
    title: 'Titanic',
    createdAt: new Date('1998-01-01'),
    year: 1997,
    category: 'Drama'
  });

  firstMovie.save().then(
      data => console.log(data)
  ).catch(
      error => console.log(error)
  );

  const secondMovie = new Movie({
    title: 'Toy Story 4',
    createdAt: new Date('2019-05-01'),
    year: 2019,
    category: 'Animation'
  });

  secondMovie.save().then(data =>
      console.log(data.onScreen)

  ).catch(error =>
      console.log(error)
  );

  const thirdMovie = new Movie({
    title: 'Harry potter',
    createdAt: new Date('2004-05-01'),
    year: 2004,
    category: 'SF'
  });

  thirdMovie.save().then(data =>
      console.log(data.onScreen)

  ).catch(error =>
      console.log(error)
  );

});

db.once('open', () => {
  Movie.find().then(data => console.log(data))
});
db.on('error', (error) => console.log(error, 'Error'));
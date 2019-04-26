const mongoose = require('mongoose');
const db = require('./../lib/db');

const MovieSchema = mongoose.Schema({
  title: String,
  createdAt: Date,
  year: {
    type: Number,
    min: 1900
  },
  category: {
    type: String,
    enum: ['Horror', 'SF', 'Drama', 'Comedy', 'Animation']
  }
});

// Création d'une méthode lié au schéma qui vérifie si le film est à l'affiche
MovieSchema.methods.onScreen = function() {
  return Date.now() > new Date (`${this.year}`)
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
const Movie = db.model('Movie', MovieSchema);
module.exports = Movie;
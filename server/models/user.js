const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const db = require('./../lib/db');

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: 'First name is required',
  },
  lastName: {
    type: String,
    required: 'Last name is required',
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    // validate: [validateEmail, 'Please fill a valid email address'], // Same that the match param
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  rgpd_terms: {
    type: Boolean,
    required: 'Please accept rgpd therms',
  },
  password: {
    type: String,
    required: 'Password is required',
  },
  createdAt: Date
});

// Listener avant le save
UserSchema.pre('save', function (next) {
  console.log('saving ' + this.firstName + ' ' + this.lastName);
  bcryptjs.genSalt(10).then(salt => {
    bcryptjs.hash(this.password, salt).then(hash => {
      this.password = hash;
    });
  });
});

// Listener après le save
UserSchema.post('save', function() {
  console.log(this.firstName + ' ' + this.lastName + ' saved');
  console.log(this);
});

// Register method with User instance
UserSchema.methods.register = function() {
  return this.save()
}

// Login method withou User instance
UserSchema.statics.login = function(email, password) {
  return new Promise((resolve, reject) => {
    User.findOne({email})
    .then(user => {
      if (!user) return reject('User not found');
      bcryptjs.compare(password, user.password)
      .then(res => res ? resolve(user): reject("Wrong Password"))
    })
    .catch(error => reject(error));
  })
}

const User = db.model('User', UserSchema);
module.exports = User;
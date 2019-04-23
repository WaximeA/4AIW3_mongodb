console.log('In app.js');

const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

// HTTP connexion like to mongoose
mongoose.connect(`mongodb://mongo`, {
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASS,
  dbName: process.env.MONGODB_DBNAME,
  useNewUrlParser: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.once('open', () => console.log('Connected to mongoose'));
db.on('error', () => console.log('Error'));

// User schema
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
  let salt = bcryptjs.genSaltSync(10);
  let hash = bcryptjs.hashSync(this.password, salt);
  this.password = hash;
  next();
});

// Listener après le save
UserSchema.post('save', function() {
  console.log(this.firstName + ' ' + this.lastName + ' saved');
  console.log(this);
});

// User collection
const User = mongoose.model('User', UserSchema);

// Insert user
db.once('open', () => {
  // Define data
  const firstUser = new User({
    firstName: 'Toto',
    lastName: 'Tot',
    email: 'toto@tot.fr',
    rgpd_terms: true,
    password: 'toto123',
    createdAt: Date.now(),
  });
  const secondUser = new User({
    firstName: 'Tata',
    lastName: 'Tat',
    email: 'tata@tat.fr',
    rgpd_terms: true,
    password: 'tata123',
    createdAt: Date.now(),
  });
  const thirdUser = new User({
    firstName: 'Titi',
    lastName: 'tit',
    email: 'titi@tit.fr',
    rgpd_terms: true,
    password: 'tata123',
    createdAt: Date.now() ,
  });

  // Save data
  firstUser.save().then(data =>
      console.log(data)

  ).catch(error =>
      console.log(error)
  );
  secondUser.save().then(data =>
      console.log(data)

  ).catch(error =>
      console.log(error)
  );
  thirdUser.save().then(data =>
      console.log(data)

  ).catch(error =>
      console.log(error)
  );
});

db.once('open', () => {
  User.find().then(data => console.log(data))
});
db.on('error', (error) => console.log(error, 'Error'));
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
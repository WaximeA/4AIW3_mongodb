const mongoose = require('mongoose');

// HTTP connexion like to mongoose
mongoose.connect(`mongodb://mongo`, {
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASS,
  dbName: process.env.MONGODB_DBNAME,
  useNewUrlParser: true,
  useCreateIndex: true
});

module.exports =  mongoose.connection;
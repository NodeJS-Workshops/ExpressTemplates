const mongoose = require('mongoose');
const config = require('./config');
function dbConfig() {
  mongoose.connect(
    config.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    err => {
      if (err) {
        console.error(err);
        throw err;
      }

      console.log('Database is setup and running');
    }
  );
}

module.exports = dbConfig;

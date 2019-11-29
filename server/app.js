const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./routes'); // Imports routes for the products
const app = express();

// MONGODB
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://localhost:27017/burger-builder';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB).catch(error => console.log(error));
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/orders', routes);

const port = 8080;

// CORS
const allowedOrigins = ['http://localhost:3000'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(port, () => {
  console.log('Server is up and running on port ' + port);
});
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes'); // Imports routes for the products
const app = express();

// Set up mongoose connection
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

app.listen(port, () => {
  console.log('Server is up and running on port ' + port);
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const order_routes = require('./routes/order'); // Imports routes for the products
const ingredient_routes = require('./routes/ingredient'); // Imports routes for the products
const app = express();

// MONGODB
const mongoose = require('mongoose');
const dev_db_url = 'mongodb://localhost:27017/burger-builder';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB).catch(error => console.log(error));
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// CORS
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/orders', order_routes);
app.use('/ingredients', ingredient_routes);

const port = 3030;
app.listen(port, () => {
  console.log('Server is up and running on port ' + port);
});
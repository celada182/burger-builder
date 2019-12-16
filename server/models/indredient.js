const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ingredients = new Schema({
  salad: {type: Number},
  bacon: {type: Number},
  cheese: {type: Number},
  meat: {type: Number}
}, {_id: false});

// Export the model
module.exports = mongoose.model('Ingredients', Ingredients);